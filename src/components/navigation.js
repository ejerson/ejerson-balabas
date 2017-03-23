import React from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);

import Clicked from '../containers/navigation-click';

export default React.createClass({
  render() {
    return (
      <div className='nav'>
        <Menu right width={ 280 } noOverlay>
          <RadiumLink className="bm-item-list" to="/"></RadiumLink>
          <RadiumLink className="bm-item-list" to="/quotes">quotes</RadiumLink>
        </Menu>
          <Link to={'/'}><h1 className='main-title'>EJERSON BALABAS</h1></Link>

          <div className='nav-div'>
            <Clicked
              title='about'
              link='/'
            />
            <Clicked
              title='music'
              link='/quotes'
            />

            <Clicked
              title='code'
              link='/'
            />

            <Clicked
              title='blog'
              link='/quotes'
            />

            <Clicked
              title='resources'
              link='/quotes'
            />

          </div>
        </div>
    );
  }
});
