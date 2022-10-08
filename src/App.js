import React from "react";
import TodoList from "./TodoList/TodoList";
import Context from "./context";
import style from "../src/scss/style/style.module.css";
import AddTodo from "./TodoList/AddTodo";


function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Roman", time: Date.apply()},
    { id: 2, completed: true, title: "Oleg", time: Date.apply()},
    { id: 3, completed: false, title: "Jenya", time: Date.apply() },
  ]);

  //  Checked TODO
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  //  Delete TODO
  function RemoveTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  //  Adding TODO
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
          time: Date.apply()
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ RemoveTodo }}>
      <div className="wrapper">
        <h1>TODO list</h1>
        <AddTodo onCreate={addTodo} />

        {todos.length ? (
          <TodoList todos={todos} Toggle={toggleTodo} />
        ) : (
          <p>No todos</p>
        )}
      </div>
      
    </Context.Provider>
  );
}

export default App;
