import React, { Component } from 'react'
import EditFormInputs from '../EditFormInputs/EditFormInputs'
import './EditFormPanel.css'

class EditFormPanel extends Component {

  render() {
    return(
      <div className={`edit-form ${!this.props.editPanelVisibility[this.props.contactId] ? "unvisible" : "visible"}`}>
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