import React, { Component } from "react";
import { Shelf, Desc } from "./styles";

class ListBooks extends Component {
  render() {
    return (
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
    );
  }
}

export default ListBooks;
