import React, { Component} from 'react'

class EditForm extends Component {

  state = {
    contacts: [],
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    phoneNumber: this.props.phoneNumber,
    email: this.props.email,
  };



  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default EditForm