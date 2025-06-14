export function isValidChain(words: string[]): boolean {
  if (words.length === 0) return false;
  if (words.length === 1) return true;
  if (words.some((word) => word !== word.toLowerCase())) return false;
  return undefined as any;
}
