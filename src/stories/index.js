import React from 'react';
import { storiesOf } from '@storybook/react';
import NewContactPanel from '../components/NewContactPanel/NewContactPanel'
import ContactDetailedInfo from '../components/ContactDetailedInfo/ContactDetailedInfo'
import EditFormInputs from '../components/EditFormInputs/EditFormInputs'
import EditFormPanel from '../components/EditFormPanel/EditFormPanel'
import ContactsLists from '../components/ContactsList/ContactsList'

const exampleData = {
  contactId: '5',
  firstName: "John",
  lastName: "Doe",
  email: "example@gmail.com",
  phoneNumber: 500100200
};

const contacts = [{
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": 500100200,
  "email": "johnny@web.com",
  "id": 1
  }
];

export const getContacts = () => {
  fetch(`http://localhost:3000/contacts`)
    .then(results => {
      return results.json()
    })
    .then(data => {
      const contactList = data.sort(this.sortContacts).map(contact => contact);
      this.setState({
        contacts: contactList
      });
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    });
};

export const sortContacts = (contactA, contactB) => {
  if (contactA.lastName.toLowerCase() < contactB.lastName.toLowerCase()) {
    return -1;
  } else if (contactA.lastName.toLowerCase() > contactB.lastName.toLowerCase()) {
    return 1;
  }
  return 0;
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
    <ContactDetailedInfo contactId={exampleData.contactId}
                         firstName={exampleData.firstName}
                         lastName={exampleData.lastName}
                         email={exampleData.email}
                         phoneNumber={exampleData.phoneNumber}
    />
  ));

storiesOf('EditFormInputs', module)
  .add('Default view', () => (
    <EditFormInputs contactId={exampleData.contactId}
                    firstName={exampleData.firstName}
                    lastName={exampleData.lastName}
                    email={exampleData.email}
                    phoneNumber={exampleData.phoneNumber}
                    getContacts={getContacts}
    />
  ));

storiesOf('ContactsList', module)
  .add('Default view', () => (
    <ContactsLists retrievedContacts={contacts}
                   sortContacts={sortContacts}
                   getContacts={getContacts}
    />

  ));

storiesOf('EditFormPanel', module)
  .add('Default view', () => (
    <EditFormPanel firstName={exampleData.lastName}
                   lastName={exampleData.lastName}
                   email={exampleData.lastName}
                   phoneNumber={exampleData.lastName}
    />
  ));

