import React from "react";
import Todo from "../Todo";

export default function({ list, prefix, onToggle }) {
  return list.map((l, i) => {
    return (
      <Todo item={l} index={prefix ? [prefix, i] : i} onToggle={onToggle} />
    );
  });
}
