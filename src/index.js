import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/app';
import Blog from './components/blog';
import Music from './components/music';
import Code from './components/code';
import Teach from './components/teach';
import Christian from './components/christian';
import WhyFear from './components/blog/blog-template';

require('./public/styles/index.less');



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path='/music' component={Music} />
    <Route path='/code' component={Code} />
    <Route path="/blog" component={Blog} />
    <Route path="/teach" component={Teach} />
    <Route path="/christian" component={Christian} />
    <Route path="/whyfear" component={WhyFear} />
  </Router>), document.querySelector('.container'));
