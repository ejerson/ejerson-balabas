import React, { Component } from 'react';

export default class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      resourceName: '',
      resourceLink: '',
      story: '',
      activity: '',
      classID: '',
      picture: ''
    };
  }

  render() {
    return (
    <div onMouseOut={this.handleMouseLeave} onMouseOver={this.handleMouseEnter} className={this.props.classID}>
      <div className='timeline-left'>
        <h1>{this.props.month}</h1>
        <img className='testimonial-pic' src={require(this.props.picture)} />
        <h3 className='code-activity'>{this.props.activity}</h3>
        <a href={this.props.resourceLink}>{this.props.resourceName}</a>
      </div>
      <div className='timeline-right'>
        <h2>{this.props.name}</h2>
        <h3 className='code-para'>{this.props.story}</h3>

      </div>
    </div>
    );
  }
}
