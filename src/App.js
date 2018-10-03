import React, { Component, Fragment } from "react";
import { Heading, Button } from "./styles/components";
import Header from "./components/Header/index";
import ListBooks from "./components/ListBooks/index";
import { Route } from "react-router-dom";
import Search from "./components/Search/index";

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
              <ListBooks books={books} shelf={currently} />
              <Heading>Want To Read</Heading>
              <ListBooks books={books} shelf={currently} />
              <Heading>Read</Heading>
              <ListBooks books={books} shelf={currently} />
            </div>
          )}
        />
        <Route path="/search" component={Search} />;
      </Fragment>
    );
  }
}

export default App;
