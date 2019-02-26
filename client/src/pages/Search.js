import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import BookSearch from "../components/BookSearch";
import { Input, SearchBtn } from "../components/Form";
import ViewCard from "../components/Card";
import BookInfo, { Image, Desc } from "../components/BookInfo";
import { ViewBtn, SaveBtn } from "../components/Buttons";
import API from "../utils/API";


class Search extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    desc: "",
    image: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveBook({
      title: this.state.title,
      author: this.state.author,
      desc: this.state.desc
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Books Search</h1>
              <h5>Search for and Save Books of Interest</h5>
            </Jumbotron>
            <BookSearch>
              <form>
                <Input />
                <SearchBtn />
              </form>
            </BookSearch>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <ViewCard>
              <h4>Results</h4>
              <BookInfo 
                title="Harry Potter and the Nobody Cares"
                author="Written By: JK Rowling"
                image={
                <Image 
                name="Harry Potter"
                image= "https://static.abebookscdn.com/cdn/com/images/harry-potter/books/sorcerers-stone-US.jpg"
                />}
                name="Harry"
                btnLeft={<ViewBtn/>}
                btnRight={<SaveBtn/>}
                desc={
                <Desc desc="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                />}
              >
              </BookInfo> 
            </ViewCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
