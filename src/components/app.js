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
        <RadiumLink className="bm-item-list" to="/quotes">quotes</RadiumLink>
      </Menu>
        <h1 className='main-title'>EJERSON BALABAS</h1>

        <div className='nav-div'>
        <Link to={'/quotes'}><button className='nav-btn'>about</button></Link>
        <Link to={'/quotes'}><button className='nav-btn'>music</button></Link>
        <Link to={'/quotes'}><button className='nav-btn'>code</button></Link>
        <Link to={'/quotes'}><button className='nav-btn'>blog</button></Link>
        <Link to={'/quotes'}><button className='nav-btn'>resources</button></Link>
        </div>

        <Intro />
      </div>




    </div>
    );
  }
}
