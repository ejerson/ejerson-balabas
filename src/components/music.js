import React, { Component } from 'react';

import Strips from '../containers/strips';
import Navigation from './navigation';
import Iframe from 'react-iframe';


export default class Music extends Component {

  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className='music-div'>
          <div className='music-philosophy'>
            <h1 className='music-philosophy-title'>why music?</h1>
            <h2 className='music-philosophy-body'>Before, it was because I wanted the acknowledgement, but now, I just want to connect with as many people as possible. Music playing allows one, theoretically, to be present and fully immersed in the moment, which eventually became something I started pursuing. But, as I keep working on my musicianship, I gradually realize that this only happens when one has moved beyond just technique. When I worried about getting a good grade for my performance, or singing all the notes just right, music became laborious, boring, and frighteningly disgusting - to me at least. I was no longer capable of connecting. To transcend beyond my ego, to be a compassionate performer has been my unconscious mission since graduating college. This is still, and will always be, an ongoing work. 

            </h2>

            <Iframe url="https://www.youtube.com/embed/zsX0dnl07rY"
                    width="500px"
                    height="315px"
                    display="initial"
                    position="relative"
                    allowFullScreen/>
          </div>
        </div>
      </div>
    );
  }
};
