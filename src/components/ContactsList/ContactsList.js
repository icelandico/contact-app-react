import React, { Component } from 'react'
import EditForm from '../EditForm/EditForm'

class ContactsList extends Component {

  state = {
    editVisibles: {}
  };

  showEditDiv = (id) => {
    this.setState( prevState => ({
      editVisibles: { ...prevState.editVisibles, [id]: !prevState.editVisibles[id] }
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

      <ul>
        {contacts.map(contact => {
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
                            getContacts={this.props.getContacts}
                            showHideEditForm={this.showEditDiv}
                  />
                </div>
              </li>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default ContactsList