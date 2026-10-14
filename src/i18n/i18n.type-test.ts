/**
 * Compile-time tests for i18n integrity.
 *
 * Components consume translations via useI18n() -> t: Translations where
 * Translations = typeof en. TypeScript already rejects any t.foo.bar access
 * where bar is not in en. The remaining risk is fr drifting from en
 * (extra/missing/renamed keys). The assertions below fail the build if
 * that ever happens. No runtime exports.
 */
import type { en } from "./en";
import type { fr } from "./fr";

type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
type Expect<T extends true> = T;

// Recursive key-shape extractor: ignores leaf value types so EN/FR strings
// stay free-form, but enforces identical nested key structure.
type Shape<T> = T extends readonly (infer U)[]
  ? readonly Shape<U>[]
  : T extends object
    ? { [K in keyof T]: Shape<T[K]> }
    : unknown;

// fr must be structurally identical to en.
type _FrIsEn = Expect<Equal<typeof fr, typeof en>>;
type _ShapesMatch = Expect<Equal<Shape<typeof en>, Shape<typeof fr>>>;

// Mutual assignability — catches extras on either side.
const _enAsFr: typeof fr = {} as typeof en;
const _frAsEn: typeof en = {} as typeof fr;

export type __I18nTypeTests = [_FrIsEn, _ShapesMatch, typeof _enAsFr, typeof _frAsEn];
