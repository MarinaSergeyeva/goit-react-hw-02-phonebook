import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactsList from "./contactsList/ContactsList";

export default class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <p>Phonebook</p>
        <ContactForm name={name} contacts={contacts} />
        <p>Contacts</p>
        <ContactsList />
      </>
    );
  }
}
