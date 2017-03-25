import React, { Component } from 'react';

import Strips from '../containers/strips';
import Navigation from './navigation';


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
            <h2 className='music-philosophy-body'>
            As a teacher, I care for my students deeply.
            I believe that to become a great teacher, one must work to ensure that the answer to this question is constantly re-evaluated:
            What is the difference between kindness and enabling? Often we forget that the goal of teaching is to allow students to become their own teachers.
            We focus too much on progress, and forgetting that keeping a student&#39;s interest alive is equally important.
            We allow ourselves to be "too important" in our student&#39;s lives. This results in our failure to understand our student&#39;s true struggles and capacities.
            Therefore, a teacher must consistently work towards balancing the student&#39;s short and
            long term goals. Short sightedness and selfishness is the fastest way to ruin a student&#39;s confidence in themselves.
            That must be avoided at all cost.
            </h2>
          </div>
        </div>
      </div>
    );
  }
};
