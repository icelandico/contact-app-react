import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import './index.css';
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
