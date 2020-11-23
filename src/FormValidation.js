import React, { Component } from 'react';
import './FormValidation.css';

const regExpEmail = RegExp(
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)


export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      password: '',
      errors: {
        fullName: '',
        email: '',
        password: ''
      }
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    // let name = event.target.name;
    // let value = event.taget.value;
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'fullName':
        errors.fullName = value.length < 5 ? 'Is this really your full name?' : '';
        break;
      case 'email': 
        errors.email = regExpEmail.test(value) ? '' : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = value.length < 8 ? 'Password must be 8 characters long!' : '';
        break;
      default:
        break;
    }

    this.setState({
      errors, 
      [name]: value}, ()=> {
      console.log(errors);
    })

  }

  render() {
    return (
    <div className="FormValidation">
      <h4>
        Form Validation
      </h4>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputName">Full Name</label>
            <input type="text" name="fullName" className="form-control" id="exampleInputName" placeholder="Enter name" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
            </div>
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>

        </form>
    
    </div>
  )
    }
};



