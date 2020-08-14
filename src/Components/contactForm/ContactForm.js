import React, { Component } from "react";

export default class ContactForm extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  render() {
    const { name } = this.props;
    return (
      <form>
        <label>
          Name <input type="text" name={name} onChange={this.addContactName} />
        </label>
        <button>Add contact</button>
      </form>
    );
  }
}
