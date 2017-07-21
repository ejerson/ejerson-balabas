import React from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);

import Clicked from './navigation-click';

export default React.createClass({
  render() {
    return (
      <div className='nav'>
        <Menu right width={ 280 } noOverlay>
          <RadiumLink className="bm-item-list" to="/"></RadiumLink>
          <RadiumLink className="bm-item-list" to="/">about</RadiumLink>
          <RadiumLink className="bm-item-list" to="/music">music</RadiumLink>
          <RadiumLink className="bm-item-list" to="/code">code</RadiumLink>
          <RadiumLink className="bm-item-list" to="/teach">teach</RadiumLink>
            <RadiumLink className="bm-item-list" to="/blog">blog</RadiumLink>
          <RadiumLink className="bm-item-list" to="/christian">Christian</RadiumLink>
        </Menu>
          <Link to={'/'}><h1 className='main-title'>EJERSON BALABAS</h1></Link>

          <div className='nav-div'>
            <Clicked
              title='about'
              link='/'
            />
            <Clicked
              title='music'
              link='/music'
            />

            <Clicked
              title='teach'
              link='/teach'
            />

            <Clicked
              title='code'
              link='/code'
            />

            <Clicked
              title='blog'
              link='/blog'
            />



          </div>
        </div>
    );
  }
});
