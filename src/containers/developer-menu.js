import React, { Component } from 'react';

export default class Developer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 'developer-menu-off',
      title: 'developer-title-off'
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(props) {
    this.setState({
      hover: 'developer-menu-on',
      title: 'developer-title-on'
    });
  }

  handleMouseLeave(props) {
    this.setState({
      hover: 'developer-menu-off',
      title: 'developer-title-off'
    });
  }

  render() {
    return (
    <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.state.hover}>
      <h1 className={this.state.title}>developer</h1>
    </div>
    );
  }
}
