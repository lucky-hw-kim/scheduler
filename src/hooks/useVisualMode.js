import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


// Helps transition to one page to the other
  function transition(newMode, replace = false) {
    if (replace) {
      setHistory((prev) => [...prev.slice(0, history.length - 1), newMode]);
      setMode(newMode);
    } else {
      setMode(newMode);
      setHistory((prev) => [...prev, newMode]);
    }
  }

// back to previous page
  function back() {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1]);
    } else {
      setMode(initial);
    }
  }

  return { mode, transition, back };
}
