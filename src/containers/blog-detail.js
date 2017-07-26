import React, { Component } from 'react';
import { connect } from 'react-redux';

import Fear from '../components/blog-entry/guidedByFear.js';

class BlogDetail extends Component {
  render() {
    if (!this.props.blog) {
      return <div><h2>choose an article above.</h2></div>
    }

    if (this.props.blog.date = 'July 20, 2017') {
      return (
        <div>
          <h1>{this.props.blog.title}</h1>
          <h3>{this.props.blog.date}</h3>
          <Fear />
        </div>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    blog: state.activeBlog
  };
}

export default connect(mapStateToProps)(BlogDetail);
