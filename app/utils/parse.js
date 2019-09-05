export function safeParse(source, fallback) {
  if (
    source === null ||
    typeof source === 'undefined' ||
    source === undefined
  ) {
    return fallback;
  }
  return source;
}
