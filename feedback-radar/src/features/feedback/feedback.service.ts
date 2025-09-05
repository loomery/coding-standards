import { Feedback } from "./feedback.types";
import { createId } from "../../lib/id";

export interface FeedbackService {
  list(): Promise<Feedback[]>;
  create(input: { title: string; description?: string }): Promise<Feedback>;
  upvote(id: string): Promise<Feedback>;
}

export function createInMemoryFeedbackService(): FeedbackService {
  let data: Feedback[] = [];
  return {
    async list() { return [...data]; },
    async create(input) {
      const f: Feedback = {
        id: createId(),
        title: input.title,
        description: input.description,
        votes: 0,
        createdAt: new Date().toISOString()
      };
      data = [f, ...data];
      return f;
    },
    async upvote(id) {
      data = data.map(it => (it.id === id ? { ...it, votes: it.votes + 1 } : it));
      const found = data.find(it => it.id === id)!;
      return found;
    }
  };
}
