import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div className='introduction'>
        <h1 className='intro-title'>Hi. I&#39;m Ejerson.</h1>
        <div className='intro'>
          <div>
          <img className='headshot' src={require('./images/ejerson.jpg')} />
          </div>
          <div>
            <h3 className='intro-body'>I am a musician, web developer, and teacher who aims to share my knowledge on things I care about. I teach to inspire. I code to make a difference. I sing to connect.</h3>
          </div>
        </div>
        <div className="mission">
          <h2 className='mission-title'>Mission</h2>
          <h3 className='mission-body'>To continue becoming a more mindful, honest, respectful, courageous, and considerate individual. To work on improving myself and the world. To lessen my impact on the environement. To always seek wisdom through books, nature, situations, fellow humans and self-reflection. To always seek to build connection with all life forms. To continually maintain, pursue and refine my mission.</h3>
        </div>
      </div>
    );
  }
});
