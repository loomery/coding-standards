export function sumCommaSeparatedNumbers(numbers: string): number {
  return numbers === ""
    ? 0
    : numbers
        .split(",")
        .map((n) => parseInt(n))
        .reduce((sum, n) => sum + n, 0);
}
