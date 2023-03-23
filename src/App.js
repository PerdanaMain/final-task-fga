import React from "react";
import Todos from "./components/Todos";

function App() {
  const state = {
    todos: [
      {
        id: 1,
        title: "Finish Progate React Course",
        completed: true,
      },
      {
        id: 2,
        title: "Have lunch with Guru Domba",
        completed: false,
      },
      {
        id: 3,
        title: "Study React with Ninja Ken",
        completed: false,
      },
    ],
  };
  console.log(state.todos);

  const toggleCompleted = (todoId) => {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  };
  return (
    <div style={{ textAlign: "center", padding: "12px" }}>
      <h1>My Todo List</h1>

      <Todos todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

export default App;
