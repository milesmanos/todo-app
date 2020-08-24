import React from "react";

export default function Todo({ todo, toggleComplete }) {
  function runTodoClick() {
    toggleComplete(todo.id);
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={runTodoClick}
        />
        <span>{todo.name}</span>
      </div>
    </>
  );
}
