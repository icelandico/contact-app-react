import React, { Component } from 'react'
import styled from 'styled-components';
import Input from '../EditFormInputs/EditFormInputs'

const EditPanel = styled.div`
    background: #a7a7a7;
    padding: 2%;
    margin: 5%;
    border-radius: 15px;
`;

class EditFormPanel extends Component {

  render() {
    return(
      <EditPanel className={`edit-form ${!this.props.editPanelVisibility[this.props.contactId] ? "unvisible" : "visible"}`}>
      <p>Edit contacts form</p>
        <Input firstName={this.props.firstName}
                        lastName={this.props.lastName}
                        phoneNumber={this.props.phoneNumber}
                        email={this.props.email}
                        contactId={this.props.contactId}
                        getContacts={this.props.getContacts}
                        showEditPanel={this.props.showEditPanel}
        />
      </EditPanel>
    )
  }
}

export default EditFormPanel