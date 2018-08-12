import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    contacts: []
  };

  componentDidMount() {
    fetch(`http://localhost:3000/contacts`)
      .then(results => {
        return results.json();
      }).then(data => {
        const contactList = data.map(contact => contact);
        this.setState({
          contacts: contactList
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Contact App</h1>
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
