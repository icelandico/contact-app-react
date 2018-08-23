import React, { Component } from 'react'
import styled from 'styled-components'
import './NewContactPanel.css'

const NewContactInput = styled.input`
    padding: 5px;
    display: block;
    margin: 1% auto;
`;

const Button = styled.button`
  padding: 1%;
  margin: 0 1%;
  min-width: 75px;
  background: #7999a9;
  border: none;
`;

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
    ).then(this.props.getContacts);
  };

  render() {
    return (
      <div className="form-container">
        <form className="newContactPanel" onSubmit={this.addContact}>
          <NewContactInput
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={(event) => this.setState({
              firstName: event.target.value
            })}
          />

          <NewContactInput
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={(event) => this.setState({
              lastName: event.target.value
            })}
          />

          <NewContactInput
            type="number"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={(event) => this.setState({
              phoneNumber: event.target.value
            })}
          />

          <NewContactInput
            type="mail"
            placeholder="Email"
            value={this.state.email}
            onChange={(event) => this.setState({
              email: event.target.value
            })}
          />

          <Button>Add contact</Button>
        </form>
      </div>
    )
  }
}

export default NewContactPanel