import React, { Component } from 'react'
import EditFormInputs from '../EditFormInputs/EditFormInputs'

class EditFormPanel extends Component {

  render() {
    return(
      <div>
        <p>Edit contacts form</p>
        <EditFormInputs firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        phoneNumber={this.props.phoneNumber}
                        email={this.props.email}
                        contactId={this.props.contactId}
                        getContacts={this.props.getContacts}
                        showEditPanel={this.props.showEditPanel}
        />
      </div>
    )
  }
}

export default EditFormPanel