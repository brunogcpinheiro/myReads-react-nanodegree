import React, { Component, Fragment } from "react";
import { Heading } from "./styles/components";
import Header from "./components/Header/index";
import ListBooks from "./components/ListBooks/index";

import * as BooksAPI from "./utils/BooksAPI";

class App extends Component {
  state = {
    books: [],
    shelf: "currently"
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
      console.log(books);
    });
  }

  render() {
    const { books, currently } = this.state;
    return (
      <Fragment>
        <Header />
        <Heading>Currently Reading</Heading>
        <ListBooks books={books} shelf={currently} />
        <Heading>Want To Read</Heading>
        <ListBooks books={books} shelf={currently} />
        <Heading>Read</Heading>
        <ListBooks books={books} shelf={currently} />
      </Fragment>
    );
  }
}

export default App;
