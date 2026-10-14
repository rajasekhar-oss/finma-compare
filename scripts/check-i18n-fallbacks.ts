/**
 * Fails the build if any string in `fr.home`, `fr.about`, or `fr.financial`
 * is identical to its English counterpart — i.e. silently falling back to EN
 * via the `...en.xxx` spread in src/i18n/fr.ts.
 *
 * Some strings are legitimately the same across locales (proper nouns,
 * single-letter labels, numbers). Those are listed in ALLOW.
 */
import { en } from "../src/i18n/en";
import { fr } from "../src/i18n/fr";

const SECTIONS = ["home", "about", "financial"] as const;

// Values that may legitimately be identical in EN and FR (proper nouns,
// short tokens, etc). Compared case-insensitively after trim.
const ALLOW = new Set<string>([
  "tekis",
  "finma",
  "ambaq",
  "mba",
  "smb",
  "smbs",
  "m&a",
  "f&a",
  "qc",
]);

type Path = (string | number)[];

const violations: { path: string; value: string }[] = [];

function isAllowed(value: string): boolean {
  const norm = value.trim().toLowerCase();
  if (!norm) return true;
  if (ALLOW.has(norm)) return true;
  // Tokens that are only proper nouns / acronyms / punctuation are fine.
  if (/^[A-Z0-9 &|().,'\-+/]+$/.test(value.trim()) && value.trim().length <= 6) {
    return true;
  }
  return false;
}

// Path segments that should never be checked — these are stable slugs,
// CSS anchor ids, or other non-display values that don't get translated.
const IGNORE_LEAF_KEYS = new Set<string>(["id"]);

function walk(enNode: unknown, frNode: unknown, path: Path) {
  const lastSegment = path[path.length - 1];
  if (typeof lastSegment === "string" && IGNORE_LEAF_KEYS.has(lastSegment)) {
    return;
  }
  if (typeof enNode === "string" && typeof frNode === "string") {
    if (enNode === frNode && !isAllowed(enNode)) {
      violations.push({ path: path.join("."), value: enNode });
    }
    return;
  }
  if (Array.isArray(enNode) && Array.isArray(frNode)) {
    enNode.forEach((item, i) => walk(item, frNode[i], [...path, i]));
    return;
  }
  if (enNode && frNode && typeof enNode === "object" && typeof frNode === "object") {
    for (const key of Object.keys(enNode as Record<string, unknown>)) {
      walk(
        (enNode as Record<string, unknown>)[key],
        (frNode as Record<string, unknown>)[key],
        [...path, key],
      );
    }
  }
}

for (const section of SECTIONS) {
  walk(en[section], fr[section], [section]);
}

if (violations.length > 0) {
  console.error(
    `\n❌ Found ${violations.length} French string(s) falling back to English ` +
      `in [${SECTIONS.join(", ")}]:\n`,
  );
  for (const v of violations) {
    const preview = v.value.length > 80 ? `${v.value.slice(0, 80)}…` : v.value;
    console.error(`  • fr.${v.path}\n      "${preview}"`);
  }
  console.error(
    "\nAdd FR translations to src/i18n/fr.ts, or extend the ALLOW list in " +
      "scripts/check-i18n-fallbacks.ts if the value is legitimately shared.\n",
  );
  process.exit(1);
}

console.log(
  `✅ All FR strings in [${SECTIONS.join(", ")}] differ from EN (or are ` +
    `allowlisted proper nouns).`,
);