import React from 'react';
import { storiesOf } from '@storybook/react';
import NewContactPanel from '../components/NewContactPanel/NewContactPanel'
import ContactDetailedInfo from '../components/ContactDetailedInfo/ContactDetailedInfo'
import EditFormInputs from '../components/EditFormInputs/EditFormInputs'
import EditFormPanel from '../components/EditFormPanel/EditFormPanel'
import ContactsLists from '../components/ContactsList/ContactsList'

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
    <ContactDetailedInfo />
  ));

storiesOf('EditFormInputs', module)
  .add('Default view', () => (
    <EditFormInputs />
  ));

storiesOf('ContactsList', module)
  .add('Default view', () => (
    <ContactsLists />
  ));

storiesOf('EditFormPanel', module)
  .add('Default view', () => (
    <EditFormPanel />
  ));

