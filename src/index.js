import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app.js';
import Quotes from './components/Quotes';
import Soon from './components/coming-soon';

require('./public/styles/index.less');



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/quotes" component={Quotes} />
    <Route path='/coming-soon' component={Soon} />
  </Router>), document.querySelector('.container'));
