import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory
  } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
    </Router>
  ), document.getElementById('app'));
registerServiceWorker();
