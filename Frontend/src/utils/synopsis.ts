/**
 * Jikan synopses usually end with a credit such as "[Written by MAL Rewrite]",
 * and some anime have no synopsis at all (null).
 */
export const cleanSynopsis = (synopsis: string | null | undefined) =>
  (synopsis ?? "").replace(/\s*\[Written by [^\]]*\]\s*$/, "").trim();
