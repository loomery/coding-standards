import React from "react";
import { Feedback } from "../feedback.types";

export function FeedbackList({
  items,
  onUpvote
}: {
  items: Feedback[];
  onUpvote: (id: string) => void;
}) {
  if (items.length === 0) return <p className="muted">No feedback yet.</p>;
  return (
    <ul className="list">
      {items.map(f => (
        <li className="item" key={f.id}>
          <span className="item-title">{f.title}</span>
          <span className="votes">votes: {f.votes}</span>
          <button className="button up" onClick={() => onUpvote(f.id)}>▲ Upvote</button>
        </li>
      ))}
    </ul>
  );
}
