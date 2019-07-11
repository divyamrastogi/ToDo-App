import React from "react";
import Todo from "../Todo";
import { guidGenerator } from "../../utils";

export default function TodoList({ list, prefix = 0, onToggle }) {
  
  return list.map((l, i) => {
    const id = guidGenerator()
    return (
      <Todo key={id} item={l} index={prefix ? [...prefix, i] : [i]} onToggle={onToggle} />
    );
  });
}
