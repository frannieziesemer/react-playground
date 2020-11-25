import React from "react";

export function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.task}
      <button onClick={() => { props.onDelete(props.index)} }>done</button>
      {/* onDelete function creates a gate to send information from child to parent. 
      we need to go two components up so first through todo-list then todo-app 
      the props passed down from todo-app will need to be a function because in the end the property will be inside the onClick.
       OnClick needs to be calling a function */}
    </div>
  )

}