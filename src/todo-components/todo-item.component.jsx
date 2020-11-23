import React from "react";
import propTypes from "react-bootstrap/esm/Image";

export function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.task}
    </div>
  )

}