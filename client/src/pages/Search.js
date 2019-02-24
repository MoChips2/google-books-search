import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

class Search extends Component {
  render() {
    return (
      <Container fluid>
          <Jumbotron>
            <h1>This is a Search.</h1>
          </Jumbotron>
      </Container>
    );
  }
}

export default Search;
