import React from "react";
import { Container, Row, Col } from "react-grid-system"
import "./App.css";
import Biocard from "./components/Biocard";
import Form from "./components/Form";
import ThingsToDo from "./components/ThingsToDo";

function App() {
  return (
    <div className="App">
      
      <Container>
        <Row>
          <Col md={6}>
            <Biocard/>
          </Col>
          <Col md={6}>
            <Form/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col md={12}>
            <ThingsToDo/>
          </Col>
          <Col md={12}></Col>
          <Col md={12}></Col>
        </Row>
      </Container>
      
      
      
    </div>
  );
}


export default App;