import React from "react";

const TodoItem = (props) => {
  const getStyle = () => {
    let textDecoration = "";
    if (props.todo.completed) {
      textDecoration = "line-through";
    } else {
      textDecoration = "none";
    }

    return {
      border: "2px solid #f4f4f4",
      fontSize: "24px",
      textDecoration: textDecoration,
    };
  };

  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        onChange={() => props.toggleCompleted(props.todo.id)}
      />
      <p>{props.todo.title}</p>
    </div>
  );
};

export default TodoItem;
