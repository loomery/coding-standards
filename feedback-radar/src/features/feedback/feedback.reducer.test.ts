import { describe, it, expect } from "vitest";
import { feedbackReducer, initialState, addFeedback, upvote } from "./feedback.reducer";

describe("feedbackReducer", () => {
  it("adds a feedback", () => {
    const s = feedbackReducer(initialState, addFeedback({ title: "Dark mode" }));
    expect(s.items[0].title).toBe("Dark mode");
    expect(s.items[0].votes).toBe(0);
  });

  it("upvotes by id", () => {
    const s1 = feedbackReducer(initialState, addFeedback({ title: "A" }));
    const id = s1.items[0].id;
    const s2 = feedbackReducer(s1, upvote(id));
    expect(s2.items[0].votes).toBe(1);
  });
});
