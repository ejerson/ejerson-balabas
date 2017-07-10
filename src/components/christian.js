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
            <h2>7-10 | Regroup and Plan</h2>
            <hr />
            <h2>7-11 | Chapter 4 quizzes</h2>
            <hr />
            <h2>7-12 | Chapter 5 quizzes</h2>
            <hr />
            <h2>7-13 | Chapter 6 quizzes</h2>
            <hr />
            <h2>7-14 | Chapter 7 quizzes</h2>
            <hr />
            <h2>7-15 | Chapter 1 & 2 wrap up quizzes</h2>
            <hr />
            <h2>7-16 | Chapter 3 & 4 wrap up quizzes</h2>
            <hr />
            <h2>7-17 | Chapter 5 & 6 wrap up quizzes</h2>
            <hr />
            <h2>7-18 | Chapter 7 wrap up quiz and Review for Final</h2>
            <hr />
            <h2>7-19 | Review for Final</h2>
            <hr />
            <h2>7-20 | Review and TAKE Final</h2>
            <hr />
          </div>
          <div className='goal'>
            <h1>Goal</h1>
            <h2>The goal is to finish this online class by July 20th. If not,
            we have until the 28th. I will keep everyone updated through this page.
            Christian and I are going to work through all of his quizzes and test. Please help
            him, as much as you can, with his writing assignments. Those are also due by July 20th. Thank you everyone!</h2>
          </div>
        </div>

      </div>
    );
  }
});
