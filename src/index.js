import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main'
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
