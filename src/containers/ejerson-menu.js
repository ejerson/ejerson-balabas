import React, { Component } from 'react';

export default class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 'ejerson-menu-off',
      title: 'ejerson-title-off'
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(props) {
    this.setState({
      hover: 'ejerson-menu-on',
      title: 'ejerson-title-on'
    });
  }

  handleMouseLeave(props) {
    this.setState({
      hover: 'ejerson-menu-off',
      title: 'ejerson-title-off'
    });
  }

  render() {
    return (
    <div>
      <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.state.hover}>
        <h1 className={this.state.title}>ejerson balabas</h1>
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
