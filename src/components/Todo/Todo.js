import React from "react";
import TodoList from "../TodoList";
import "./Todo.scss";

export default function Todo({
  item: { label, done, todoList },
  id,
  index,
  onToggle
}) {
  return (
    <div className="todo">
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={done}
          onChange={() => onToggle(index)}
        />
        {label} {index}
      </label>
      {todoList && todoList.length > 0 ? (
        <TodoList prefix={index} list={todoList} onToggle={onToggle} />
      ) : null}
    </div>
  );
}
