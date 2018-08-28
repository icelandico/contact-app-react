import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import NewContactPanel from '../NewContactPanel/NewContactPanel'
import ContactList from '../ContactsList/ContactsList'
import './Main.css';

class Main extends Component {

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
      <Switch>
        <div className="main">
          <Route exact path='/' render={() => 'Welcome to this App'} />
          <Route path='/newContact'
                 component={
                   <NewContactPanel getContacts={this.getContacts}/>}

          />
          {/*<NewContactPanel getContacts={this.getContacts}/>*/}
          <Route path='/contacts'
                 component={
                   <ContactList retrievedContacts={this.state.contacts}
                                sortContacts={this.sortContacts}
                                getContacts={this.getContacts}/>}
          />

          {/*<ContactList  retrievedContacts={this.state.contacts}*/}
                        {/*sortContacts={this.sortContacts}*/}
                        {/*getContacts={this.getContacts}*/}
          {/*/>*/}
        </div>
      </Switch>
    )
  }
}

export default Main
