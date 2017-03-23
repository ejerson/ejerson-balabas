import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Clicked extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'nav-btn',
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(props) {
    this.setState(prevState => ({
    color: 'nav-btn'
  }));
  }

  handleMouseEnter(props) {
    this.setState({
      color: 'nav-btn-clicked'
    });
  }

  handleMouseLeave() {
    this.setState({
      color: 'nav-btn'
    });
  }

  render() {
    return (
      <Link to={this.props.link}><button onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onClick={this.handleNavClick} className={this.state.color}>{this.props.title}</button></Link>
    );
  }
}
