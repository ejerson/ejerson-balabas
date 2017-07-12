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
        <div className='quotes'>
        <div>
            <h1>Schedule</h1>
            <h2>7-11,12,13 | Chapter 4 quizzes</h2>
            <h2 className="christian-update">UPDATE 7-12 Christian was not prepared to take the first quiz yesterday, we are going to try to finish three quizzes today.</h2>
            <hr />
            <h2>7-14,15,16 | Chapter 5 quizzes</h2>
            <hr />
            <h2>7-17,18,19 | Chapter 6 quizzes</h2>
            <hr />
            <h2>7-20,21,22 | Chapter 7 quizzes</h2>
            <hr />
            <h2>7-23 | Chapter 1 wrap up quiz</h2>
            <hr />
            <h2>7-24 | Chapter 2 wrap up quiz</h2>
            <hr />
            <h2>7-25 | Chapter 3 wrap up quiz</h2>
            <hr />
            <h2>7-26 | Chapter 4 wrap up quiz</h2>
            <hr />
            <h2>7-27 | Chapter 5 wrap up quiz</h2>
            <hr />
            <h2>7-28 | Chapter 6 wrap up quiz</h2>
            <hr />
            <h2>7-29 | Chapter 7 wrap up quiz</h2>
            <hr />
            <h2>7-30 | Review for Final</h2>
            <hr />
            <h2>7-31 | Review for Final</h2>
            <hr />
            <h2>8-1 | Review for Final</h2>
            <hr />
            <h2>8-2 | Review for Final</h2>
            <hr />
            <h2>8-3 | Review and TAKE Final</h2>
            <hr />
          </div>
          <div className='goal'>
            <h1>Goal</h1>
            <h2>The goal is to finish this online class by August 4th. I will keep everyone updated through this page.
            Christian and I are going to work through all of his quizzes and test. Please help
            him, as much as you can, with his writing assignments. Those are due by August 4th. Thank you everyone!</h2>
          </div>
        </div>

      </div>
    );
  }
});
