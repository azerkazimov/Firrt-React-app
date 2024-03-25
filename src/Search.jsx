import React, { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Search: ${this.state.value}`);
  };
  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          className="search__input main"
        />
        <button className="search__button btn" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
