import React from 'react';
import { storiesOf } from '@storybook/react';
import NewContactPanel from '../components/NewContactPanel/NewContactPanel'
import ContactDetailedInfo from '../components/ContactDetailedInfo/ContactDetailedInfo'
import EditFormInputs from '../components/EditFormInputs/EditFormInputs'
import EditFormPanel from '../components/EditFormPanel/EditFormPanel'
import ContactsLists from '../components/ContactsList/ContactsList'

const contacts = {
  "contacts": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "phoneNumber": "48123555111",
      "email": "johnny@web.com",
      "id": 2
    }
  ]
};

storiesOf('NewContactPanel', module)
  .addDecorator(story => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
 .add('Default', () => <NewContactPanel />)
 .addDecorator(story => (
   <div style={{background: '#4b5d6d', padding: '15px', width: '30%'}}>
     {story()}
   </div>
 ))
 .add('Different Style', () => <NewContactPanel />);

storiesOf('ContactDetailedInfo', module)
  .add('Default view', () => (
    <ContactDetailedInfo contactId={1}
                         firstName={"John"}
                         lastName={"Doe"}
                         email={"example@gmail.com"}
                         phoneNumber={"500-600-700"}
    />
  ));

storiesOf('EditFormInputs', module)
  .add('Default view', () => (
    <EditFormInputs firstName={"John"}
                    lastName={"Doe"}
                    phoneNumber={"500-600-700"}
                    email={"example@gmail.com"}
                    contactId={1}
    />
  ));

storiesOf('ContactsList', module)
  .add('Default view', () => (
    <ContactsLists retrievedContacts={this.state.contacts}
                   sortContacts={this.sortContacts}
                   getContacts={contacts}/>
  ));

storiesOf('EditFormPanel', module)
  .add('Default view', () => (
    <EditFormPanel />
  ));

