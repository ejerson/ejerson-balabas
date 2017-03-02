import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className='intro-title'>HI. I&#39;M EJERSON.</h1>
        <div className='intro'>
          <div className='intro-body'>
            <h3>I am a musician, web developer, and teacher who aims to share my knowledge on things I care about. I teach to inspire. I code to make a difference. I sing to connect.</h3>
          </div>
          <div className='headshot-div'>
          <img className='headshot' src={require('./images/ejerson.jpg')} />
          </div>
        </div>
      </div>
    );
  }
});
