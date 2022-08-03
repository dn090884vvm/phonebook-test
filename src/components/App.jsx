import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    console.log(contact);
    const { name, number } = contact;
    console.log(name, number);
    const newContact = {
      id: 'id of something',
      name: name,
      number: number,
    };
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
    // this.setState(prevState => ({ [name]: prevState.value }));
  };

  deleteContact = id => {
    // console.log('delete', id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = e => {
    const { value, name } = e.target;
    console.log(value);
    console.log(name); //it's a name of input field
    console.log(this);
    this.setState({ name: value });
  };
  // handleChange = () => {
  //   this.setState(prevState => {
  //     return { value: prevState.value };
  //   });

  //   console.log(this.state);
  // };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
      </>
    );
  }
}

export default App;
