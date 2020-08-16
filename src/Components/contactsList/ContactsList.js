import React, { Component } from "react";

class ContactsList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
