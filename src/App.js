import React, { Component, Fragment } from "react";
import { Heading, Button } from "./styles/components";
import Header from "./components/Header/index";
import ListBooks from "./components/ListBooks/index";
import { Route } from "react-router-dom";
import Search from "./components/Search/index";

import * as BooksAPI from "./utils/BooksAPI";

class App extends Component {
  state = {
    books: []
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
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Header />
              <Heading>Currently Reading</Heading>
              {books.filter(book => book.shelf === "currentlyReading") && (
                <ListBooks books={books} shelf={currently} />
              )}
              <Heading>Want To Read</Heading>
              {books.filter(book => book.shelf === "wantToRead") && (
                <ListBooks books={books} shelf={currently} />
              )}
              <Heading>Read</Heading>
              {books.filter(book => book.shelf === "read") && (
                <ListBooks books={books} shelf={currently} />
              )}
            </div>
          )}
        />
        <Route path="/search" component={Search} />;
      </Fragment>
    );
  }
}

export default App;
