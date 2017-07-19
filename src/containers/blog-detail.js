import React, { Component } from 'react';
import { connect } from 'react-redux';


class BlogDetail extends Component {
  render() {
    if (!this.props.blog) {
      return <div>Select a blog to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.blog.title}</div>
        <div>Quote: {this.props.blog.quote}</div>
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
