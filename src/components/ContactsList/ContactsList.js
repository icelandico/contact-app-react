import React, { Component } from 'react'
import EditFormPanel from '../EditFormPanel/EditFormPanel'
import ContactDetailedInfo from '../ContactDetailedInfo/ContactDetailedInfo'
import './ContactList.css'

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
      <ul className="contact-list">
        {contacts.map(contact => {
          return (
            <div>
              <li className="contact-item" key={contact.id}>
                <ContactDetailedInfo firstName={contact.firstName}
                                     lastName={contact.lastName}
                                     phoneNumber={contact.phoneNumber}
                                     email={contact.email}
                />
                <button onClick={() => this.removeContact(contact.id)}>Remove</button>
                <button onClick={() => this.showEditPanel(contact.id)}>Edit</button>
                <EditFormPanel key={contact.id}
                               contactId={contact.id}
                               firstName={contact.firstName}
                               lastName={contact.lastName}
                               email={contact.email}
                               phoneNumber={contact.phoneNumber}
                               getContacts={this.props.getContacts}
                               showEditPanel={this.showEditPanel}
                               editPanelVisibility={this.state.editPanelsVisibility}
                />
              </li>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default ContactsList