import React from "react";
import './todo-app.css';
import { Header } from "./header.component.jsx";
import { TodoList } from "./todo-list.component";
import SubmitForm from "./submit-form.component";
 


class TodoApp extends React.Component {
  state = {
    tasks:
    ['find a job', 'go to the hairdresser', 'buy xmas gifts']
  }

  handleDelete = (index) =>{
    //create a copy of the tasks array
    const newArr = [...this.state.tasks];
    //remove the item from index 
    newArr.splice(index, 1);
    //re - setState as new array
    this.setState({tasks: newArr});
  }
//has to be in the component becuase we are adding data to tasks state object
  handleSumbit = (input) => {
    //takes input (state object/data) from submit-form component and adds it to array of tasks
    this.setState({tasks: [...this.state.tasks, input]})
    // make a new function here - which will update tasks data
  }


  render() { return (
    <div className="todo-app box">
      <Header numberTodos={this.state.tasks.length}/>
      <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
      {/* why this. only in this component = 
      because it is a class component and you have to do it just in class components ecause of states   */}
      {/* here we have to send the handleAdd function downwards using props called handleSubmit. */}
      <SubmitForm handleSubmit={this.handleSumbit} />

      

    </div>
  )
}
}

export default TodoApp;