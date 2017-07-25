import React, { Component } from 'react';

import Strips from '../containers/strips';
import Navigation from '../containers/navigation';
import Iframe from 'react-iframe';


export default class Music extends Component {

  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className='music-div'>
          <div className='music-philosophy'>
            <h1 className='music-philosophy-title'>why music?</h1>

            <h2 className='page-intro'>
              When I was a student, I performed because I wanted <span className="word-emphasis">acknowledgement</span>, but now, I want to <span className="word-emphasis">connect</span> with as many people as possible.
              Performing allows one, theoretically, to be <span className="word-emphasis">present</span> and fully <span className="word-emphasis">immerse</span>d in the moment, which was my initial <span className="word-emphasis">focus</span>.
              But as I continue working on my musicianship, I am gradually realizing that this only happens when one has moved beyond <span className="word-emphasis">technique</span>.
              When I worried about getting a good grade for my <span className="word-emphasis">performance</span>, or singing all the notes just right, <span className="word-emphasis">music</span> became laborious, boring, and frighteningly disgusting - to me at least.
              I was no longer capable of connecting. To <span className="word-emphasis">transcend</span> beyond my ego, to be a <span className="word-emphasis">compassion</span>ate performer has been my unconscious <span className="word-emphasis">mission</span> since graduating college.
              This is still, and will always be, an <span className="word-emphasis">ongoing</span> work.
            </h2>
             </div>
          <iframe src="https://www.youtube.com/embed/zsX0dnl07rY"
          frameborder="2" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
};
