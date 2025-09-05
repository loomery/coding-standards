export function createId(): string {
  // Prefer crypto.randomUUID if available, fallback to timestamp-rand
  const g = (globalThis as any);
  if (g.crypto?.randomUUID) return g.crypto.randomUUID();
  const rnd = Math.random().toString(36).slice(2);
  return `id_${Date.now().toString(36)}_${rnd}`;
}
