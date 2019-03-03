import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import ViewCard from "../components/Card";
import { StoredBooks } from "../components/BookInfo";
import API from "../utils/API";

class Saved extends Component {

  state = {
    _id: "",
    books: [],
    title: "",
    author: "",
    desc: "",
    image: "",
    link: "",
    savedBook: false
  };

  componentDidMount() {
    this.getSavedBooks();
    ;
  }

  getSavedBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res);
        let data = res.data;
        this.setState({
          books: data,
          savedBook: data.savedBook
        })
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };

  deleteBook = (id) => {
    API.deleteBook(id)
      .then(() => this.getSavedBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Books Search</h1>
              <h5>Search for and Save Books of Interest</h5>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <ViewCard>
                <h4>Saved Books</h4>
                {this.state.books.map(book => (
                  <StoredBooks
                    key={book._id}
                    _id={book._id}
                    title={book.title}
                    author={book.author}
                    image={book.image}
                    desc={book.desc}
                    link={book.link}
                    deletebook={this.deleteBook}
                  >
                  </StoredBooks>
                ))}
              </ViewCard>
            ) : ("")}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
