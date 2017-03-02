import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';


import Strips from '../containers/strips';
import NavLink from './NavLink';
import Intro from './introduction';

let RadiumLink = Radium(Link);

export default class App extends Component {
  render() {
    return (
    <div>
    <Strips />
      <div className='nav'>
      <Menu right width={ 280 } noOverlay>
        <RadiumLink className="bm-item-list" to="/"></RadiumLink>
        <RadiumLink className="bm-item-list" to="/blog">blog</RadiumLink>
      </Menu>
        <h1 className='main-title'>EJERSON DIAZ</h1>
        <Intro />

      </div>

    </div>
    );
  }
}
