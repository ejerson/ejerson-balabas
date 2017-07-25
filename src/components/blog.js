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


      <div className='blog-div'>
        <h1 className='main-div-title'>why blog?</h1>
          <h2 className='page-intro'>To share ideas and create a more <span className="word-emphasis">open</span>, deep understanding of various topics
          that are <span className="word-emphasis">important</span> to individuals. Provides a way to <span className="word-emphasis">process</span> and solve some
          <span className="word-emphasis"> ongoing</span> questions or issues that would otherwise be ignored.
          <span className="word-emphasis"> Create</span>s an avenue for understanding.<span className="word-emphasis"> Explore</span> different perspectives and way of life.
          Improve and  <span className="word-emphasis">learn</span> new things and ideas.
          </h2>

          <BlogList />
          <BlogDetail />
          <hr />

        <h1>Quotes</h1>
        <h2>"It is more noble to give yourself completely to one individual than to labor deligently for the salvation of the masses." -Dag Hammarskjöld </h2>
        <h2>"It is the weak who are cruel. Gentleness can only be expected from the strong." -Leo Ruskin</h2>
      </div>
    </div>
    );
  }
}
