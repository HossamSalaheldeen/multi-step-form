import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "reactstrap";
import "./styles.css";
import MasterForm from './components/MasterForm';

function App() {

  let [numChildren,setNumChildren] = useState(0);

  const children = [];

    for (var i = 0; i < numChildren; i += 1) {
      children.push(<ChildComponent key={i} number={i} />);
    };

    const onAddChild = () => {
      setNumChildren(numChildren + 1);
    }

  return (
    <div className="App">
      <ParentComponent addChild={onAddChild}>
        {children}
      </ParentComponent>


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

const ParentComponent = props => (
  <div className="card calculator">
    <div id="children-pane">
      {props.children}
    </div>
    <p><a href="#" onClick={props.addChild}>Add Another Child Component</a></p>
  </div>
);

const ChildComponent = props => <div>{"I am child " + props.number}</div>;

export default App;
