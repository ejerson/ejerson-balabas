import React, { Component } from 'react';

import Strip from '../containers/strip';


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

      <div className="developer">
        <h1>developer</h1>
      </div>
      <div className='human'>
        <h1 className='human-text'>Ejerson Balabas</h1>
      </div>
      <div className='musician'>
        <h1>musician</h1>
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
