import React, { Component } from 'react';
import './App.css';
import NewContactPanel from '../NewContactPanel/NewContactPanel'
import ContactList from '../ContactsList/ContactsList'

class App extends Component {

  state = {
    contacts: [],
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
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
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
        <ContactList retrievedContacts={this.state.contacts}
                      sortContacts={this.sortContacts}
                      getContacts={this.getContacts}
        />
      </div>
    );
  }
}

export default App;
