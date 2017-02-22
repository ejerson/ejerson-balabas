import React, { Component } from 'react';

export default class Musician extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 'musician-menu-off',
      title: 'musician-title-off'
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(props) {
    this.setState({
      hover: 'musician-menu-on',
      title: 'musician-title-on'
    });
  }

  handleMouseLeave(props) {
    this.setState({
      hover: 'musician-menu-off',
      title: 'musician-title-off'
    });
  }

  render() {
    return (
    <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.state.hover}>
      <h1 className={this.state.title}>musician</h1>
    </div>
    );
  }
}
