import React from "react";

export function Header(props) {
  return (
    <div className="header">
      <h4>You have {props.numberTodos} todos! </h4>
    </div>
  )

}