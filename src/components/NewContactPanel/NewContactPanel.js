import React, { Component } from 'react'

class NewContactPanel extends Component {

  state = {
    contacts: [],
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  };

  clearInputs = () => {
    this.setState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    })
  };

  addContact = (event) => {
    event.preventDefault();
    this.clearInputs();
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
    ).then(this.props.getContacts)
  };

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default NewContactPanel