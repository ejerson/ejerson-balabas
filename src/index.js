import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/app';
import Blog from './components/blog';
import Music from './components/music';
import Code from './components/code';
import Teach from './components/teach';
import Christian from './components/christian';


require('./public/styles/index.less');

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path='/music' component={Music} />
    <Route path='/code' component={Code} />
    <Route path="/blog" component={Blog} />
    <Route path="/teach" component={Teach} />
    <Route path="/christian" component={Christian} />
  </Router>
  </Provider>
  ), document.querySelector('.container'));
