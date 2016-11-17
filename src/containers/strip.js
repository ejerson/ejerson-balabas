import React, { Component } from 'react';

export default class Stip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black'
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(props) {
    this.setState({
      color: 'aqua'
    });
  }

  handleMouseLeave() {
    this.setState({
      color: 'black'
    });
  }

  render() {
    return (
    <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.state.color}></div>
    );
  }
}
