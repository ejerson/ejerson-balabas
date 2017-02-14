import React, { Component } from 'react';

export default class Stip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 'developer-title',
      text: ''
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(props) {
    this.setState({
      hover: 'developer-title-on'
    });
  }

  handleMouseLeave() {
    this.setState({
      hover: 'developer-title'
    });
  }

  render() {
    return (
    <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.state.hover}>
      <h1>{this.props.text}</h1>
    </div>
    );
  }
}
