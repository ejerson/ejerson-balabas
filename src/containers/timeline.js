import React, { Component } from 'react';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      resourceOne: '',
      resourceTwo: '',
      story: '',
      activity: '',
      classID: ''
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
    <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.props.classID}>
      <div className='timeline-left'>
        <h1>{this.props.month}</h1>
        <h3>{this.props.activity}</h3>
        <h3>{this.props.resourceOne}</h3>
        <h3>{this.props.resourceTwo}</h3>
      </div>
      <div className='timeline-right'>
        <h3>{this.props.story}</h3>
      </div>
    </div>
    );
  }
}
