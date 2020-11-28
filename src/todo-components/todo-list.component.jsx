import React from "react";
import { TodoItem } from "./todo-item.component";

export function TodoList (props) {
  return(
    <div className="todo-list">
      {props.tasks.map((task, index) => <TodoItem key={index} index={index} task={task} onDelete={props.onDelete} />)}
    </div>
  )

}