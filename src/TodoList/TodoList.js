import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import style from "../scss/Todolist/Todolist.module.css"




 function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo,index) => {
        return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.Toggle}/>;
      })}
    </ul>
  );
}

TodoList.PropType = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    Toggle: PropTypes.func.isRequired
}
export default TodoList
