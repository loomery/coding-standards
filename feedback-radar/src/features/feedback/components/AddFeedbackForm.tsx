import React from "react";
import { useState } from "react";

export function AddFeedbackForm({ onAdd }: { onAdd: (title: string) => void }) {
  const [title, setTitle] = useState("");
  return (
    <form
      className="panel row"
      onSubmit={e => {
        e.preventDefault();
        if (title.trim()) onAdd(title.trim());
        setTitle("");
      }}
    >
      <input
        className="input"
        aria-label="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Suggest a feature..."
      />
      <button className="button" type="submit">Add</button>
    </form>
  );
}
