import React from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default React.createClass({
  render() {
    return (
      <div className='sub-nav'>
        <Link to={'/whyfear'}><h1>FEAR</h1></Link>
      </div>
    );
  }
});
