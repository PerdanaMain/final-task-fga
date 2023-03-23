import React from "react";
import TodoItem from "./TodoItem";
const Todos = (props) => {
  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
    </div>
  );
};

export default Todos;
