import React from 'react';
import { storiesOf } from '@storybook/react';
import NewContactPanel from '../components/NewContactPanel/NewContactPanel'
import ContactDetailedInfo from '../components/ContactDetailedInfo/ContactDetailedInfo'

storiesOf('NewContactPanel', module)
  .add('Default view', () => (
    <NewContactPanel />
  ));

storiesOf('ContactDetailedInfo', module)
  .add('Default view', () => (
    <ContactDetailedInfo />
  ));




