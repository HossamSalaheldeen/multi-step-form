import logo from './logo.svg';
import './App.css';
import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import "./styles.css";
import MasterForm from './components/MasterForm';

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color: lightgray; }"}</style>
      </Helmet>
      <Container>
        <Row>
          <Col>
            <MasterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
