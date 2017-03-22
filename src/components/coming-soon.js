import React, { Component, PropTypes} from 'react';

import Navigation from './navigation';


export default class About extends Component {

  render() {
    return (
      <div>
        <Navigation />
        <div className='coming-soon'>
          <h1>COMING</h1>
          <h1>SOON</h1>
        </div>
      </div>
    );
  }
};
