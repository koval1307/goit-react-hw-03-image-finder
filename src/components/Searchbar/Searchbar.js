import React, { Component } from "react";
import styles from "./search-form.module.css";

export class SearchBar extends Component {
  state = {
    query: " ",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);

    this.setState({ query: "" });
  };

  handleInput = ({ target: {value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchForm_button}>
            <span className={styles.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={styles.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={this.state.query}
            placeholder="Search"
            onChange={this.handleInput}
          />
        </form>
      </header>
    );
  }
}
