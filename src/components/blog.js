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
