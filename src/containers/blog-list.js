import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBlog } from '../actions/index';
import { bindActionCreators } from 'redux';


class BlogList extends Component {
	renderList() {
		return this.props.blogs.map((blog) => {
			return (
				<li
					key={blog.title}
					onMouseEnter={() => this.props.selectBlog(blog)}
					>
					{blog.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="blog-list">
				{this.renderList()}
			</ul>
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
