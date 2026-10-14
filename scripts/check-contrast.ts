/**
 * Automated WCAG AA contrast check for the section-overlay system.
 *
 * Approach
 * --------
 * Each content section composes a foreground text token over a background
 * built from: (image) ← (token-tinted overlay layer at variable alpha)
 *   ← (subtle pattern grid).
 *
 * Because the underlying photo is unknown at build time, the check
 * computes the *effective* background for two worst-case image colors
 * (pure white and pure black) and reports the lowest contrast ratio.
 * If both worst cases clear WCAG AA, the section passes for every photo
 * in between.
 *
 * Run: `npm run check:contrast` (exits non-zero on any AA failure).
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

// ---------- Color utilities ---------------------------------------------

type RGB = readonly [number, number, number];

const hslToRgb = (h: number, s: number, l: number): RGB => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
};

const blend = (over: RGB, under: RGB, alpha: number): RGB =>
  [
    Math.round(over[0] * alpha + under[0] * (1 - alpha)),
    Math.round(over[1] * alpha + under[1] * (1 - alpha)),
    Math.round(over[2] * alpha + under[2] * (1 - alpha)),
  ] as const;

const relLuminance = ([r, g, b]: RGB): number => {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};

const contrast = (fg: RGB, bg: RGB): number => {
  const a = relLuminance(fg);
  const b = relLuminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
};

// ---------- Parse design tokens & overlay opacities from index.css -------

const here = dirname(fileURLToPath(import.meta.url));
const cssPath = resolve(here, "../src/index.css");
const css = readFileSync(cssPath, "utf8");

const tokenRegex = /--([a-z][\w-]*):\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%/g;
const tokens = new Map<string, RGB>();
for (const m of css.matchAll(tokenRegex)) {
  tokens.set(m[1], hslToRgb(Number(m[2]), Number(m[3]), Number(m[4])));
}
const tok = (name: string): RGB => {
  const v = tokens.get(name);
  if (!v) throw new Error(`Missing CSS token --${name}`);
  return v;
};

// Pull a numeric var default from a class block, e.g. --tx-overlay-mid: 0.55
const readVar = (block: string, name: string): number | undefined => {
  const m = block.match(new RegExp(`--${name}:\\s*([\\d.]+)`));
  return m ? Number(m[1]) : undefined;
};

const blockOf = (selector: string): string => {
  const i = css.indexOf(selector);
  if (i === -1) throw new Error(`Selector ${selector} not found in index.css`);
  const start = css.indexOf("{", i);
  const end = css.indexOf("}", start);
  return css.slice(start, end);
};

const pinstripe = blockOf(".bg-texture-pinstripe");
const dots = blockOf(".bg-texture-dots");
const vignette = blockOf(".bg-texture-vignette");

const baseDefaults: Record<string, { overlay: RGB; alphas: [number, number, number] }> = {
  pinstripe: {
    overlay: tok("background"),
    alphas: [
      readVar(pinstripe, "tx-overlay-top")!,
      readVar(pinstripe, "tx-overlay-mid")!,
      readVar(pinstripe, "tx-overlay-bot")!,
    ],
  },
  dots: {
    overlay: tok("muted"),
    alphas: [
      readVar(dots, "tx-overlay-top")!,
      readVar(dots, "tx-overlay-top")!,
      readVar(dots, "tx-overlay-bot")!,
    ],
  },
  vignette: {
    overlay: tok("background"),
    alphas: [
      readVar(vignette, "tx-overlay-top")!,
      readVar(vignette, "tx-overlay-top")!,
      readVar(vignette, "tx-overlay-bot")!,
    ],
  },
};

// Modifier overrides — keep in sync with index.css `.tx--*` rules
const modifiers: Record<string, [number, number, number] | undefined> = {
  default: undefined,
  "tx--hero": [0.42, 0.36, 0.46],
  "tx--bold": [0.55, 0.48, 0.58],
  "tx--soft": [0.78, 0.74, 0.82],
  "tx--quiet": [0.88, 0.85, 0.9],
};

// ---------- Build the check matrix --------------------------------------

const WHITE: RGB = [255, 255, 255];
const BLACK: RGB = [0, 0, 0];

type TextRole = { name: string; color: RGB; large: boolean };
const textRoles: TextRole[] = [
  { name: "foreground", color: tok("foreground"), large: false },
  { name: "muted-foreground", color: tok("muted-foreground"), large: false },
  { name: "accent (heading)", color: tok("accent"), large: true },
];

const AA_NORMAL = 4.5;
const AA_LARGE = 3.0;

type Row = {
  texture: string;
  modifier: string;
  text: string;
  worst: number;
  required: number;
  passes: boolean;
};

const rows: Row[] = [];

for (const [texName, base] of Object.entries(baseDefaults)) {
  for (const [modName, override] of Object.entries(modifiers)) {
    const alphas = override ?? base.alphas;
    // Effective bg = max alpha (most image-revealing region across the gradient)
    // is least overlay → worst-case contrast. Use the MIN alpha for the check.
    const minAlpha = Math.min(...alphas);
    for (const role of textRoles) {
      const bgOverWhite = blend(base.overlay, WHITE, minAlpha);
      const bgOverBlack = blend(base.overlay, BLACK, minAlpha);
      const ratio = Math.min(
        contrast(role.color, bgOverWhite),
        contrast(role.color, bgOverBlack),
      );
      const required = role.large ? AA_LARGE : AA_NORMAL;
      rows.push({
        texture: texName,
        modifier: modName,
        text: role.name,
        worst: ratio,
        required,
        passes: ratio >= required,
      });
    }
  }
}

// ---------- Report -------------------------------------------------------

const pad = (s: string, n: number) => s.padEnd(n);
const fmt = (n: number) => n.toFixed(2);

console.log("\nWCAG AA contrast check — section overlays\n");
console.log(
  pad("Texture", 11) +
    pad("Modifier", 12) +
    pad("Text role", 20) +
    pad("Worst", 8) +
    pad("Required", 10) +
    "Result",
);
console.log("-".repeat(70));

let failures = 0;
for (const r of rows) {
  if (!r.passes) failures += 1;
  console.log(
    pad(r.texture, 11) +
      pad(r.modifier, 12) +
      pad(r.text, 20) +
      pad(fmt(r.worst), 8) +
      pad(fmt(r.required), 10) +
      (r.passes ? "PASS" : "FAIL"),
  );
}

console.log();
if (failures > 0) {
  console.error(
    `${failures} section/text combination(s) fail WCAG AA. Reduce the corresponding tx--* alpha or change the text token.`,
  );
  process.exit(1);
}
console.log(`All ${rows.length} combinations pass WCAG AA.`);