import React, { Component } from 'react';

import Strip from '../containers/strip';
import Menu from '../containers/menu-presentation';

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

      <div className='developer'>
        <Menu
          text='musician'
        />
      </div>
      <div className='human'>
        <Menu
          text='ejerson balabas'
        />
      </div>
      <div className='musician'>
        <Menu
          text='developer'
        />
      </div>
      <div className='contact'>
        <ul>
          <li><img className='instagram-btn' src={require('../public/images/instagram.png')} /></li>
          <li><img className='instagram-btn' src={require('../public/images/linkedin.png')} /></li>
          <li><img className='instagram-btn' src={require('../public/images/facebook-black.png')} /></li>
          <li><img className='instagram-btn' src={require('../public/images/github.png')} /></li>

        </ul>
      </div>
    </div>
    );
  }
}
