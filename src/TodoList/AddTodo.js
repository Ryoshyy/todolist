import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "../scss/AddTodo/Addtodo.module.css";

function AddTodo({ onCreate }) {
  const [value, setValue] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit" className={style.button}>
        AddTodo
      </button>
    </form>
  );
}

AddTodo.protoTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
 