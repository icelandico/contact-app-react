import React, { Component } from 'react';
import './App.css';
import EditForm from '../EditForm/EditForm'
import NewContactPanel from '../NewContactPanel/NewContactPanel'

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
    this.getContacts()
  }

  removeContact = id => {
    fetch(
      `http://localhost:3000/contacts/` + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(this.getContacts)
  };

  showEditDiv = (id) => {
    this.setState( prevState => ({
      editVisibles: { ...prevState.editVisibles, [id]: !prevState.editVisibles[id] }
    }))
  };

  render() {
    return (
      <div className="App">
        <h1>Contact App</h1>
        <NewContactPanel getContacts={this.getContacts()}/>
        <ul>
          {this.state.contacts.map(contact => {
            return (
              <div>
                <li key={contact.id}>
                  <p>{contact.firstName} {contact.lastName}</p>
                  <p>{contact.phoneNumber}</p>
                  <p>{contact.email}</p>
                  <button onClick={() => this.removeContact(contact.id)}>Remove</button>
                  <button onClick={() => this.showEditDiv(contact.id)}>Edit</button>
                  <div key={contact.id} className={`edit-form ${!this.state.editVisibles[contact.id] ? "unvisible" : "visible"}`}>
                    <p>This is edit form</p>
                    <EditForm firstName={contact.firstName}
                              lastName={contact.lastName}
                              phoneNumber={contact.phoneNumber}
                              email={contact.email}
                              id={contact.id}
                              getContacts={this.getContacts}
                              showHideEditForm={this.showEditDiv}
                    />
                  </div>
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
