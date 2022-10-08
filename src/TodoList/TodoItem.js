import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";
import style from "../scss/Todoitem/Todoitem.module.css";

function TodoItem({ todo, index, onChange }) {

  const {RemoveTodo} = useContext(Context)
  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li>
      <span className={classes.join(" ")}>
        <input type="checkbox" checked={todo.completed} onChange={() => onChange(todo.id)} />
        <strong>{index + 1} </strong>
        {todo.title}
        {todo.time}
      </span>

      <button onClick={() => RemoveTodo(todo.id)} className = {style.button}>&times;</button>
    </li>
  );
}



TodoItem.PropType = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;

