import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import { Link } from 'react-router';
import Radium from 'radium';

import Strip from '../containers/strip';
import NavLink from './NavLink';
let RadiumLink = Radium(Link);

export default class App extends Component {
  render() {
    return (
    <div>
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <div className='nav'>


      <Menu right width={ 280 } noOverlay>
        <RadiumLink className="bm-item-list" to="/"></RadiumLink>
        <RadiumLink className="bm-item-list" to="/blog">blog</RadiumLink>
      </Menu>
        <h1 className='main-title'>EJERSON DIAZ</h1>
        <div className='intro'>
          <h1 className='intro-title'>HI. I&#39;M EJERSON.</h1>
          <div className='intro-body'>I am a musician, web developer, and teacher who aims to share my knowledge on things I care about. I teach to inspire. I code to make a difference. I sing to connect.</div>
          <img className='headshot' src={require('./images/ejerson.jpg')} />
        </div>
      </div>

    </div>
    );
  }
}
