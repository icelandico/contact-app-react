import React from 'react';
import { storiesOf } from '@storybook/react';
import NewContactPanel from '../components/NewContactPanel/NewContactPanel'
import ContactDetailedInfo from '../components/ContactDetailedInfo/ContactDetailedInfo'
import EditFormInputs from '../components/EditFormInputs/EditFormInputs'

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




