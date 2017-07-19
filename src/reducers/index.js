import { combineReducers } from 'redux';
import BlogsReducer from "./reducer_blogs";
import ActiveBlog from "./reducer_active_blog";

const rootReducer = combineReducers({
  blogs: BlogsReducer,
  activeBlog: ActiveBlog
});

export default rootReducer;
