import React, { useEffect, useReducer, useMemo } from "react";
import { env } from "../lib/env";
import { ErrorBoundary } from "../lib/ErrorBoundary";
import { AddFeedbackForm } from "../features/feedback/components/AddFeedbackForm";
import { FeedbackList } from "../features/feedback/components/FeedbackList";
import { feedbackReducer, initialState, addFeedback, upvote } from "../features/feedback/feedback.reducer";
import { createInMemoryFeedbackService } from "../features/feedback/feedback.service";
import { countVotes } from "../features/feedback/lib/countVotes";

export default function App() {
  const service = useMemo(() => createInMemoryFeedbackService(), []);
  const [state, dispatch] = useReducer(feedbackReducer, initialState);
  const [theme, setTheme] = React.useState<string>(() =>
    typeof window !== "undefined" ? (localStorage.getItem("theme") || "dark") : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    void service.list();
  }, [service]);

  const totalVotes = countVotes(state.items);

  return (
    <ErrorBoundary>
      <div className="container">
        <div className="header">
          <h1 className="h1">{env.APP_NAME}</h1>
          <div className="row" style={{ alignItems: "center" }}>
            <span className="muted">Total votes: {totalVotes}</span>
            <button className="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? "Light" : "Dark"} mode
            </button>
          </div>
        </div>
        <AddFeedbackForm onAdd={title => service.create({ title }).then(() => dispatch(addFeedback({ title })))} />
        <FeedbackList items={state.items} onUpvote={id => service.upvote(id).then(() => dispatch(upvote(id)))} />
      </div>
    </ErrorBoundary>
  );
}
