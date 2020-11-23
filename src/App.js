import React from 'react';
import './App.css';
import FormValidation from './FormValidation.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoApp  from './todo-components/todo-app.component.jsx';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col sm={6}>
            <FormValidation />
            </Col>
          <Col sm={6}> 
            <TodoApp />
          </Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
     
      
    </div>
  );
}

export default App;
