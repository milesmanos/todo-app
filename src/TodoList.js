import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, toggleComplete }) {
  return (
    <>
      <h1>To do</h1>
      <div>
        {todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
          );
        })}
      </div>
    </>
  );
}
