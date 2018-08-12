import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contacts: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  };

  componentDidMount() {
    fetch(`http://localhost:3000/contacts`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        const contactList = data.map(contact => contact);
        this.setState({
          contacts: contactList
        });
      });
  }

  addContact = () => {
    const newContact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    };
    fetch(
      'http://localhost:3000/contacts', {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
          'Content-type': 'application/json'
        }
      }
    )
  };

  render() {
    return (
      <div className="App">
        <h1>Contact App</h1>
          <form className="newContactPanel" onSubmit={this.addContact}>
            <input
              type="text"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={(event) => this.setState({
                firstName: event.target.value
              })}
              />

            <input
              type="text"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={(event) => this.setState({
                lastName: event.target.value
              })}
            />

            <input
              type="number"
              placeholder="Phone Number"
              value={this.state.phoneNumber}
              onChange={(event) => this.setState({
                phoneNumber: event.target.value
              })}
            />

            <input
              type="mail"
              placeholder="Email"
              value={this.state.email}
              onChange={(event) => this.setState({
                email: event.target.value
              })}
            />

            <button>Add contact</button>
          </form>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <div>
                <li key={contact.id}>
                  <p>{contact.firstName} {contact.lastName}</p>
                  <p>{contact.phoneNumber}</p>
                  <p>{contact.email}</p>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
