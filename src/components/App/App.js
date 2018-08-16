import React, { Component } from 'react';
import './App.css';
import NewContactPanel from '../NewContactPanel/NewContactPanel'
import ContactsList from "../ContactsList/ContactsList";

class App extends Component {

  state = {
    contacts: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    editVisibles: {}
  };

  getContacts = () => {
    fetch(`http://localhost:3000/contacts`)
      .then(results => {
        return results.json()
      })
      .then(data => {
        const contactList = data.sort(this.sortContacts).map(contact => contact);
        this.setState({
          contacts: contactList
        });
      });
  };

  sortContacts = (contactA, contactB) => {
    if (contactA.lastName.toLowerCase() < contactB.lastName.toLowerCase()) {
      return -1;
    } else if (contactA.lastName.toLowerCase() > contactB.lastName.toLowerCase()) {
      return 1;
    }
    return 0;
  };

  componentDidMount() {
    this.getContacts();
  }

  render() {
    return (
      <div className="App">
        <h1>Contact App</h1>
        <NewContactPanel getContacts={this.getContacts}/>
        <ContactsList retrievedContacts={this.state.contacts}
                      sortContacts={this.sortContacts}
                      getContacts={this.getContacts}
        />
      </div>
    );
  }
}

export default App;
