import React from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from '../containers/navigation';

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

        </div>
      </div>
    );
  }
});
