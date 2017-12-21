import React, { Component } from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className='footer'>
        <a href='https://www.facebook.com/ejersonb/' target='_blank'><img className='social-media facebook' src={require('./images/facebook.png')} /></a>
        <a href='https://www.linkedin.com/in/ejerson-balabas-209b19122/' target='_blank'><img className='social-media linkedin' src={require('./images/linkedin.png')} /></a>
        <a href='https://medium.com/@ejersonb' target='_blank'><img className='social-media medium' src={require('./images/medium.png')} /></a>
        <a href='https://github.com/ejerson' target='_blank'><img className='github' src={require('./images/github.png')} /></a>
      </div>
    );
  }
});
