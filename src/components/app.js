import React, { Component } from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import NavLink from './NavLink';
import About from './about';
import Navigation from './navigation';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: <About />
    }
  }




  render() {
    return (
    <div>
      <Strips />
      {this.state.active}
      <Navigation />
    </div>
    );
  }
}
