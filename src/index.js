import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Blog from './components/blog';
import Music from './components/music';
import Code from './components/code';
import Resources from './components/resources';

require('./public/styles/index.less');



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path='/music' component={Music} />
    <Route path='/code' component={Code} />
    <Route path="/blog" component={Blog} />
    <Route path="/resources" component={Resources} />
  </Router>), document.querySelector('.container'));
