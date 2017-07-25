import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBlog } from '../actions/index';
import { bindActionCreators } from 'redux';


class BlogList extends Component {
	renderList() {
		return this.props.blogs.map((blog) => {
			return (
				<h3
					key={blog.title}
					onClick={() => this.props.selectBlog(blog)}
					className='ind-blog-title'
					>{blog.title}
				</h3>
			);
		});
	}

	render() {
		return (
			<div className='blog-list'>
			<h2 className='blog-entry-title'>blog entries</h2>
			<ul>
				{this.renderList()}
			</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		blogs: state.blogs
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBlog: selectBlog }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
