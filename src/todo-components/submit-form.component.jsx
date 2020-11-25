import React from 'react';
// we need to use a class component because we have state information/ updating inside the component 

class SubmitForm extends React.Component {
  //creates a state object so we can later place the value of input inside and send upwards via function
  state ={input:''};
  
//handle submit is the props from above level function  setting input value as 
  onSumbit = (event) => {
    event.preventDefault();
    //when onSubmit function is called the handle submit funciton in todo-app component is called with the input content passed into 
    this.props.handleSubmit(this.state.input);
    this.setState({ input: ''});

  }
// we are using functions to send data from child to parents 
// how do i send data parent to child 
// how do i send data child to parent 
//when data is changing you need states there fore you need to use class components 

  render(){
  return(
    <div className="submit-form">
      <form onSubmit={this.onSumbit}>
        <input 
          className="inputField" 
          type="text" 
          placeholder="Enter new list item..." 
          value={this.state.input}
          //onChange even handler updates the info in state object 
          onChange={(event) => this.setState({input: event.target.value})}
        />
        <button>Add</button>
      </form>

    </div>
  )
  }
}

export default SubmitForm;

