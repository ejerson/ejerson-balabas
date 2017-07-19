import React, { Component } from 'react';
import { connect } from 'react-redux';


class BlogDetail extends Component {
  render() {
    if (!this.props.blog) {
      return <div>Select a blog to get started.</div>
    }

    return (
      <div>
        <h1>{this.props.blog.title}</h1>
        <h3>{this.props.blog.date}</h3>
        <h2>{this.props.blog.contentOne}</h2>
        <h2>{this.props.blog.contentTwo}</h2>
        <h2>{this.props.blog.contentThree}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blog: state.activeBlog
  };
}

export default connect(mapStateToProps)(BlogDetail);
