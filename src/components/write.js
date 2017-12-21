import React, { Component } from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from './navigation';
import BlogList from '../containers/blog-list';
import BlogDetail from '../containers/blog-detail';

import Footer from './footer';

export default class Write extends Component {

  render() {
    return (
      <div>
    
        <Strips />
        <Navigation />
        <div className="write-div">
          <div className='div-content'>
          <h1 className='main-div-title'>why write?</h1>
          <h2 className='page-intro'>
            To <span className="word-emphasis">share</span> ideas and <span className="word-emphasis">create</span> a more open,
            deep <span className="word-emphasis">understanding</span> of various topics that are important to individuals.
            Provides a way to process and <span className="word-emphasis">solve</span> some ongoing questions or issues
            that would otherwise be ignored. Creates an avenue for understanding.
            <span className="word-emphasis"> Explore</span> different perspectives and way of life.
            <span className="word-emphasis"> Improve</span> and <span className="word-emphasis">learn</span> new things and ideas.
          </h2>
          <BlogList />
          <BlogDetail />
          </div>
          <Footer />
        </div>



      </div>
    );
  }
};
