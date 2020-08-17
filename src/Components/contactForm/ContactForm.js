import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  addContact = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addItem(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    console.log("props", this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={this.addContact} />
        </label>
        <label>
          Number:
          <input type="text" name="number" value={number} onChange={this.addContact} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
