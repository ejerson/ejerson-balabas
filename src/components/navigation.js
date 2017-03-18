import React from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default React.createClass({
  render() {
    return (
      <div className='nav'>
        <Menu right width={ 280 } noOverlay>
          <RadiumLink className="bm-item-list" to="/"></RadiumLink>
          <RadiumLink className="bm-item-list" to="/quotes">quotes</RadiumLink>
        </Menu>
          <h1 className='main-title'>EJERSON BALABAS</h1>

          <div className='nav-div'>
          <Link to={'/quotes'}><button className='nav-btn'>about</button></Link>
          <Link to={'/quotes'}><button className='nav-btn'>music</button></Link>
          <Link to={'/quotes'}><button className='nav-btn'>code</button></Link>
          <Link to={'/quotes'}><button className='nav-btn'>blog</button></Link>
          <Link to={'/quotes'}><button className='nav-btn'>resources</button></Link>
          </div>
        </div>
    );
  }
});
