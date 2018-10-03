import React, { Component } from "react";
import { Input } from "./styles";
import { Link } from "react-router-dom";

class Search extends Component {
  render() {
    return (
      <div>
        <Input type="text" placeholder="Search..." />
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default Search;
