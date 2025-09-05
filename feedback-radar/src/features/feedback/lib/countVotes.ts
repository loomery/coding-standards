type Item = { id: string; votes: number };
export function countVotes(items: Item[]): number {
  return items.reduce((sum, i) => sum + Math.max(0, i.votes), 0);
}
