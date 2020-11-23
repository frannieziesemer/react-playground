import React from "react";
import './todo-app.css';
import { Header } from "./header.component.jsx";
import { TodoItem } from "./todo-item.component";
import { TodoList } from "./todo-list";


class TodoApp extends React.Component {
  state = {
    tasks:
    ['find a job', 'go to the hairdresser', 'buy xmas gifts']
  }


  render() { return (
    <div className="todo-app">
      <Header numberTodos={this.state.tasks.length}/>
      <TodoList tasks={this.state.tasks}/>
      {/* <TodoItem task={this.state.tasks[1]}/> */}
      

    </div>
  )
}
}

export default TodoApp;