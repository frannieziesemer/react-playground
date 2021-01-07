import React from "react";


class ApiFetch extends React.Component {

  state = {
    tasks: []
  }

  

  componentDidMount() {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
    //pulls the response from url into json file
    .then(response => response.json())
    //updates our state object to = the json file (todos refers to the data ?? i think)
    .then( todos => {
      this.setState({ tasks: todos });
    });

  }
  

  render () {
    //const { tasks } = this.state;
  return (
    <div className="box api-fetch">
      {this.state.tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </div>
  )
  }

}

export default ApiFetch;