import React, { Component } from 'react'

class EditFormInputs extends Component {

  state = {
    contacts: [],
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    phoneNumber: this.props.phoneNumber,
    email: this.props.email,
  };

  componentDidMount() {
    this.props.getContacts();
  }

  editContact = (event) => {
    event.preventDefault();
    this.props.showEditPanel(this.props.contactId);
    const updatedContact = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email
    };
    fetch(
      'http://localhost:3000/contacts/' + this.props.contactId, {
        method: 'PATCH',
        body: JSON.stringify(updatedContact),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ).then(this.props.getContacts)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.editContact}>
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

        <button>Save Edited</button>
        </form>
      </div>
    )
  }
}

export default EditFormInputs