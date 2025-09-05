import { Feedback } from "./feedback.types";
import { createId } from "../../lib/id";

type State = { items: Feedback[] };
type Action =
  | { type: "ADD"; payload: { title: string; description?: string } }
  | { type: "UPVOTE"; payload: { id: string } };

export const initialState: State = { items: [] };

export function addFeedback(input: { title: string; description?: string }): Action {
  return { type: "ADD", payload: input };
}
export function upvote(id: string): Action {
  return { type: "UPVOTE", payload: { id } };
}

export function feedbackReducer(state: State = initialState, action: Action): State {
  if (action.type === "ADD") {
    const now = new Date().toISOString();
    const item: Feedback = {
      id: createId(),
      title: action.payload.title,
      description: action.payload.description,
      votes: 0,
      createdAt: now
    };
    return { items: [item, ...state.items] };
  }
  if (action.type === "UPVOTE") {
    return {
      items: state.items.map(it =>
        it.id === action.payload.id ? { ...it, votes: it.votes + 1 } : it
      )
    };
  }
  return state;
}
