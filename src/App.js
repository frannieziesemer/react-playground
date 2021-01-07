import React from 'react';
import './App.css';
import FormValidation from './FormValidation.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TodoApp  from './todo-components/todo-app.component.jsx';
import ApiFetch from './api-fetch-components/api-fetch.component.jsx';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md>
            <FormValidation />
            </Col>
          <Col md> 
            <TodoApp />
          </Col>
        </Row>
        <Row>
          <Col sm>
            <ApiFetch />
          </Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
     
      
    </div>
  );
}

export default App;
