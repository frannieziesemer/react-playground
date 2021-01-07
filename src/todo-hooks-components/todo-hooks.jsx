import React, { useState } from "react";

//use function component when using hooks
//do not need to use this.
//changing from class component to hooks 
  //function component, define functions inside, remove this. , create variables to store state = hooks 


function TodoHooks() {
  
  //you can use more that one state information 
  //create variable for state 
  //setTasks is an 'update function' can be called anything you want 
  const [tasks, setTasks] = useState(['task1', 'task2']);

//must define functions
  function handleDelete(index) {
    //create a copy of the tasks array
    const newArr = [...tasks];
    //remove the item from index 
    newArr.splice(index, 1);
    //re - setState as new array
    setTasks({ tasks: newArr });
  }
  //has to be in the component becuase we are adding data to tasks state object
  function handleSumbit(input) {
    //takes input (state object/data) from submit-form component and adds it to array of tasks
    //class component
    //this.setState({ tasks: [...this.state.tasks, input] })
    // make a new function here - which will update tasks data
    //hooks:
    setTasks([...tasks, input]);
  }


 
    return (
      <div className="todo-app box">
        <Header numberTodos={tasks.length} />
        <TodoList tasks={tasks} onDelete={handleDelete} />
        {/* why this. only in this component = 
      because it is a class component and you have to do it just in class components ecause of states   */}
        {/* here we have to send the handleAdd function downwards using props called handleSubmit. */}
        <SubmitForm handleSubmit={handleSumbit} />



      </div>
    )
  
}

export default TodoHooks;