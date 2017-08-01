import React from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from '../containers/navigation';
import Timeline from '../containers/timeline';

export default React.createClass({
  render() {
    return (
      <div>
        <Strips />
        <Navigation />
          <div className='teach-div'>

              <h1 className='main-div-title'>why teach?</h1>
              <h2 className='page-intro'>Teaching is something that requires <span className="word-emphasis">patience</span>, understanding, more patience, and the <span className="word-emphasis">never ending</span> quest to learn.
              As a teacher, I work to <span className="word-emphasis">relate</span> the knowledge I have acquired throughout the years,
              and ensure that my students <span className="word-emphasis">learn</span> to become <span className="word-emphasis">independent</span> learners by providing them with the tools necessary to succeed.
              </h2>
              <hr />
              <Timeline
                classID='timeline-div'
                name='Cameron Lang'
                picture='src/components/images/Cameron.jpg'
                story='Getting to train with Ejerson over the past year and a half has helped me grow enormously as a singer and performer. It is apparent in his teaching that he really has his students best interests in mind and his ability to communicate his techniques to singers of different skill levels is incredible. He teaches you to sing in a healthy way, but he also makes you think for yourself about how you got there to make sure you really understand the techniques. Ejerson is an incredible teacher who pushes and inspires you to be better everyday. '
              />
        </div>
      </div>
    );
  }
});
