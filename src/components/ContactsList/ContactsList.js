import React, { Component } from 'react'
import styled from 'styled-components'
import ContactDetailedInfo from '../ContactDetailedInfo/ContactDetailedInfo'
import EditPanel from '../EditFormPanel/EditFormPanel'

const ContactList = styled.ul`
    margin: 0;
    padding: 0;
    text-align: center;
`;

const ListItem = styled.li`
    list-style: none;
    padding: 2%;
    background: #c4b7a6;
    margin: 5% auto;
    max-width: 30%;
    border-radius: 15px;
`;

class ContactsList extends Component {

  state = {
    editPanelsVisibility: {}
  };

  showEditPanel = (id) => {
    this.setState( prevState => ({
      editPanelsVisibility: { ...prevState.editPanelsVisibility, [id]: !prevState.editPanelsVisibility[id] }
    }))
  };

  removeContact = id => {
    fetch(
      `http://localhost:3000/contacts/` + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(this.props.getContacts)
  };

  render() {

    const contacts = this.props.retrievedContacts;
    return(
      <ContactList className="contact-list">
        {contacts.map(contact => {
          return (
            <div>
              <ListItem className="contact-item" key={contact.id}>
                <ContactDetailedInfo firstName={contact.firstName}
                                     lastName={contact.lastName}
                                     phoneNumber={contact.phoneNumber}
                                     email={contact.email}
                />
                <button onClick={() => this.removeContact(contact.id)}>Remove</button>
                <button onClick={() => this.showEditPanel(contact.id)}>Edit</button>
                <EditPanel key={contact.id}
                           contactId={contact.id}
                           firstName={contact.firstName}
                           lastName={contact.lastName}
                           email={contact.email}
                           phoneNumber={contact.phoneNumber}
                           getContacts={this.props.getContacts}
                           showEditPanel={this.showEditPanel}
                           editPanelVisibility={this.state.editPanelsVisibility}
                />
              </ListItem>
            </div>
          )
        })}
      </ContactList>
    )
  }
}

export default ContactsList