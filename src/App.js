import React, { useState, useRef } from "react";
import TodoList from "./TodoList";
import uuid from "react-uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const inputBoxRef = useRef();

  function toggleComplete(id) {
    const newTodos = [...todos];
    const theChosenTodo = newTodos.find((t) => t.id === id);
    theChosenTodo.complete = !theChosenTodo.complete;
    setTodos(newTodos);
  }
  function runAddTodo() {
    if (inputBoxRef.current.value === "") {
      return;
    }
    const newTodo = {
      id: uuid(),
      completed: false,
      name: inputBoxRef.current.value,
    };
    setTodos([...todos, newTodo]);
    inputBoxRef.current.value = null;
  }
  function runClearComplete(id) {
    setTodos(todos.filter((t) => !t.complete));
  }

  //components to render
  return (
    <>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <input ref={inputBoxRef} type="text" />
      <button onClick={runAddTodo}>add</button>
      <button onClick={runClearComplete}>clear completed</button>
    </>
  );
}

export default App;
