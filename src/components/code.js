import React, { Component } from 'react';

import Strips from '../containers/strips';
import Navigation from './navigation';


export default class Music extends Component {

  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className='code-div'>
            <h1 className='code-title'>why code?</h1>
            <h2 className='reason-to-code'>I don&#39;t like doing anything if it doesn&#39;t contribute to my mission.
            My initial reason why I wanted to code, like most people, is the promise of making a lot of money.
            But that mindset eventually made it imposible for me to want to code. I was stuck and didn&#39;t know how to
            motivate myself or at least decide to choose what to work on.
            </h2>
        </div>
        <div className='timeline-div'>
          <div>
          </div>
          <div>
          </div>
        </div>

      </div>
    );
  }
};
