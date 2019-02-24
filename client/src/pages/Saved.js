import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Saved extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>This is a Saved.</h1>
        </Jumbotron>
      </Container>
    );
  }
}

export default Saved;
