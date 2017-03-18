import React, { Component } from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import NavLink from './NavLink';
import About from './about';
import Navigation from './navigation';


export default class App extends Component {

  render() {
    return (
    <div>
      <Strips />
      <About />
      <Navigation />
    </div>
    );
  }
}
