import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import BookSearch from "../components/BookSearch";
import { Input, SearchBtn } from "../components/Form";
import ViewCard from "../components/Card";
import {BookInfo} from "../components/BookInfo";
import API from "../utils/API";


class Search extends Component {

  state = {
    search: "",
    error: "",
    books: [],
    title: "",
    author: "",
    desc: "",
    image: "",
    link: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.searchBook(this.state.search)
      .then(res => {
        console.log(res);
        this.setState({ 
          books: res.data.items
         });
        console.log(this.state.books);
        console.log(this.state.title);
      })
      .catch(err => console.log(err));
  };

  saveBookinDB = (data) => {
    console.log(data);
    API.saveBook({
      title: data.title,
      author: data.author,
      desc: data.desc,
      image: data.image,
      link: data.link,
      savedBook: true
    })
      .then(res => 
        console.log(res),
        alert("Book has been saved!")
      )
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
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Search Title"
                />
                <SearchBtn
                  onClick={this.handleFormSubmit}
                />
              </form>
            </BookSearch>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <ViewCard>
                <h4>Results</h4>
                {this.state.books.map(book => (
                  <BookInfo
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    desc={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    savebook={this.saveBookinDB}
                  >
                  </BookInfo>
                ))}
              </ViewCard>
            ) : ("")}
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Search;