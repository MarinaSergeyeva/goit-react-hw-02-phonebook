import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactsList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuidv4(), name, number }],
    }));
    // this.setState({ name: "", number: "" });
  };

  getFilter = (e) => {
    console.log(e.target);
    const { value } = e.target;

    this.setState({
      filter: value,
    });
  };

  findContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <>
        <p className="sectionTitle">Phonebook</p>
        <ContactForm
          number={number}
          name={name}
          handleSubmit={this.handleSubmit}
          addContact={this.addContact}
        />
        <p className="sectionTitle">Contacts</p>
        <Filter filter={filter} getFilter={this.getFilter} />
        <ContactsList contacts={this.findContact} />
      </>
    );
  }
}
