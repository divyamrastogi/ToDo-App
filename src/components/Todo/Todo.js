import React from "react";
import TodoList from "../TodoList";
import "./Todo.scss";
import { guidGenerator } from "../../utils";

export default function Todo({
  item: { id = guidGenerator(), label, done, todoList },
  index,
  onToggle
}) {
  return (
    <div>
      <label className="todo" for={id}>
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
