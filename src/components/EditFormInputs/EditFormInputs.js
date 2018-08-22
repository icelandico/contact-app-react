import React, { Component } from 'react'
import styled from 'styled-components';

const Input = styled.input`
    margin: 2% auto;
    display: block;
    max-width: 75%;
    `;

const SaveButton = styled.button`
    margin-top: 5%;
`;

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
        <form className="edit-form" onSubmit={this.editContact}>
        <Input
          type="text"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={(event) => this.setState({
            firstName: event.target.value
          })}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={(event) => this.setState({
            lastName: event.target.value
          })}
        />

        <Input
          type="number"
          placeholder="Phone Number"
          value={this.state.phoneNumber}
          onChange={(event) => this.setState({
            phoneNumber: event.target.value
          })}
        />

        <Input
          type="mail"
          placeholder="Email"
          value={this.state.email}
          onChange={(event) => this.setState({
            email: event.target.value
          })}
        />

        <SaveButton className="button-save-edits">Save Edited</SaveButton>
        </form>
      </div>
    )
  }
}

export default EditFormInputs