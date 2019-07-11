import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList";
import "./styles.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      label: "Life Insurance",
      done: false,
      todoList: [
        {
          label: "Deeksha's Life Insurance",
          done: false
        }
      ]
    },
    {
      label: "Emergency Savings Account",
      done: false
    }
  ]);
  function onToggle(index) {
    todoList[index].done = !todoList[index].done;
    setTodoList([...todoList]);
  }
  return (
    <div className="App">
      <h1>Life's ToDos</h1>
      <TodoList list={todoList} onToggle={onToggle} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
