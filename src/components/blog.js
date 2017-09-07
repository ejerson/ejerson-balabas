import React, { Component } from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from '../containers/navigation';
import BlogList from '../containers/blog-list';
import BlogDetail from '../containers/blog-detail';

export default class Blog extends Component {

  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className="blog-div">
          <h1 className='main-div-title'>why code?</h1>
          <h2 className='page-intro'>
            It can be very <span className="word-emphasis">challenging. </span>
            It <span className="word-emphasis">increases</span> your <span className="word-emphasis">confidence</span> in your ability to learn.
            It <span className="word-emphasis">sharpens</span> the mind.
            You become <span className="word-emphasis">expose</span> to different way of thinking.
            Forces you to see and approach a problem from a different angle.
            Coding requires <span className="word-emphasis">creativity.</span>
          </h2>
          <BlogList />
          <BlogDetail />
        </div>
      </div>
    );
  }
};
