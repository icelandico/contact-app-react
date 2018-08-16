import React, { Component } from 'react'

class ContactDetailedInfo extends Component {
  render() {
    return (
    <div>
      <p>{this.props.firstName} {this.props.lastName}</p>
      <p>{this.props.phoneNumber}</p>
      <p>{this.props.email}</p>
    </div>
    )
  }
}

export default ContactDetailedInfo