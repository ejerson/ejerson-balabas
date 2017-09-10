import React, { Component } from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className='footer'>
        <img className='social-media facebook' src={require('./images/facebook.png')} />
        <img className='social-media twitter' src={require('./images/twitter.png')} />
        <img className='social-media linkedin' src={require('./images/linkedin.png')} />
        <img className='social-media medium' src={require('./images/medium.png')} />
      </div>
    );
  }
});
