import React from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from './navigation';

export default React.createClass({
  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className='resources'>
          <h1>Resources</h1>
          <h2>Coming Soon!</h2>
        </div>
      </div>
    );
  }
});
