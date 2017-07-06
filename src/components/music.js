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
            <h1 className='music-philosophy-title'>philosophy</h1>
            <h2 className='music-philosophy-body'>Teaching is something that requires patience, understanding, more patience, and the never ending quest to learn. As a teacher, I work to relate the knowledge I have acquired throughout the years,
            and ensure that my students learn to become independent learners by providing them with the tools necessary to succeed.
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
