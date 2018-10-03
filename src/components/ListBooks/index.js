import React, { Component, Fragment } from "react";
import { Shelf, Desc, Button } from "./styles";
import { Link } from "react-router-dom";

class ListBooks extends Component {
  render() {
    return (
      <Fragment>
        <Shelf>
          {this.props.books.map(book => (
            <Desc>
              <img
                alt={book.title}
                src={book.imageLinks.thumbnail}
                key={book.id}
              />
              <p>{book.title}</p>
              <small>{book.authors.join(" & ")}</small>
            </Desc>
          ))}
        </Shelf>
        <Link to="/search">
          <Button />
        </Link>
      </Fragment>
    );
  }
}

export default ListBooks;
