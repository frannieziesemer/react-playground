import React from 'react';
import { PlusCircleIcon } from '@primer/octicons-react';
import './submit-form.css';


// we need to use a class component because we have state information/ updating inside the component 

class SubmitForm extends React.Component {
  //state object, input is undefined because we want the input clear field empty on load
  //creates a state object so we can later place the value of input inside and send upwards via function
  state ={input:''};
  
//onSubmit function is an event called in the <form> tag and called when submit button is clicked
  onSumbit = (event) => {
    event.preventDefault();
    //onSubmit function calls handle submit function from App.js component
    //handleSubmit function has been sent down to this component via props
    //it passes in the input value 
    this.props.handleSubmit(this.state.input);
    //sets state back to empty for the input field on submit
    this.setState({ input: ''});

  }
// we are using functions to send data from child to parents 
// how do i send data parent to child 
// how do i send data child to parent 
//when data is changing you need states there fore you need to use class components 

  render(){
  return(
    <div className="submit-form ">
      <form onSubmit={this.onSumbit} className="field is-grouped">
        <input 
          className="inputField input is-rounded" 
          type="text" 
          placeholder="Enter new list item..." 
          value={this.state.input}
          //onChange to handle input value 
          // updates state (input) object within this component
          onChange={(event) => this.setState({input: event.target.value})}
        />
        <button type="sumbit" className="submit-button"><PlusCircleIcon size={24} /></button>
        
      </form>

    </div>
  )
  }
}

export default SubmitForm;

