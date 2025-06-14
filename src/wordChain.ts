function hasValidLength(word1: string, word2: string): boolean {
  return word1.length === word2.length;
}

function countLetterDifferences(word1: string, word2: string): number {
  if (!hasValidLength(word1, word2)) return -1;

  let differences = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) differences++;
  }
  return differences;
}

function hasValidCase(word: string): boolean {
  return word === word.toLowerCase();
}

function hasValidLengths(words: string[]): boolean {
  const firstWordLength = words[0].length;
  return words.every((word) => word.length === firstWordLength);
}

function hasValidDifferences(words: string[]): boolean {
  for (let i = 0; i < words.length - 1; i++) {
    if (countLetterDifferences(words[i], words[i + 1]) !== 1) return false;
  }
  return true;
}

export function isValidChain(words: string[]): boolean {
  if (words.length === 0) return false;
  if (words.length === 1) return true;

  return (
    words.every((word) => word === word.toLowerCase()) && // Prüfung auf Großbuchstaben
    words.every((word, _, arr) => word.length === arr[0].length) && // Prüfung auf gleiche Länge
    words.slice(1).every((word, i) => {
      // Prüfung auf einen Buchstaben Unterschied
      const prevWord = words[i];
      return [...word].filter((char, j) => char !== prevWord[j]).length === 1;
    })
  );
}
