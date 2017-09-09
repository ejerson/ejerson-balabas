import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/app';
import Write from './components/write';
import Sing from './components/sing';
import Code from './components/code';
import Teach from './components/teach';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

require('./public/styles/index.less');



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path='/sing' component={Sing} />
      <Route path='/code' component={Code} />
      <Route path="/write" component={Write} />
      <Route path="/teach" component={Teach} />
    </Router>
  </Provider> , document.querySelector('.container'));
