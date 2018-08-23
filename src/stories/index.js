import React from 'react';
import { storiesOf } from '@storybook/react';
import NewContactPanel from '../components/NewContactPanel/NewContactPanel'
import ContactDetailedInfo from '../components/ContactDetailedInfo/ContactDetailedInfo'
import EditFormInputs from '../components/EditFormInputs/EditFormInputs'
import EditFormPanel from '../components/EditFormPanel/EditFormPanel'
import ContactsLists from '../components/ContactsList/ContactsList'

storiesOf('NewContactPanel', module)
  .add('Default view', () => (
    <NewContactPanel />
  ));

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



