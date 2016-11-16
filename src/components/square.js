import React, { Component } from 'react';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: this.props.className,
      title: this.props.title,
      content: this.props.content
    }
  }

  render() {
    return (
    <div className="square-container">
      <div><h1 className="square-text">{this.props.title}</h1></div>
      <div>{this.props.content}</div>
    </div>
    );
  }
}
