import React, { Component } from 'react';

import Strips from '../containers/strips';
import Navigation from './navigation';
import Timeline from '../containers/timeline';
import Footer from './footer';


export default class Music extends Component {

  render() {
    return (
      <div>
        <Strips />
        <Navigation />
        <div className='code-div'>
            <div className='div-content'>
            <h1 className='main-div-title'>why code?</h1>
            <h2 className='page-intro'>
              It can be very <span className="word-emphasis">challenging. </span>
              It <span className="word-emphasis">increases</span> your <span className="word-emphasis">confidence</span> in your ability to learn.
              It <span className="word-emphasis">sharpens</span> the mind.
              You become <span className="word-emphasis">expose</span> to different way of thinking.
              Forces you to see and approach a problem from a different angle.
              Coding requires <span className="word-emphasis">creativity.</span>
            </h2>

            <h2 className='timeline-title'>timeline</h2>
            <Timeline
              classID='timeline-key'
              month='2016'
              activity='activity'
              resourceOne='resource'
              story='There&#39;s so much resources available online on how to learn how to code. My goal for this timeline is to help those who are from different backgrounds to feel less intimidated by the idea of coding.'
            />

            <Timeline
              classID='timeline-div'
              month='september'
              activity='Started learning Mongo DB, Express, React and Redux'
              resourceName='react.teachable.com'
              resourceLink='http://react.teachable.com/'
              story='After learning how to use JQuery, adjusting to how React works was a bit challenging. I became more comfortable with react after coming across Stephen Grider video tutorials in udemy. I do believe that the best way to learn how to code is by creating projects, but in the case of react due to JavaScript fatigue, using a less stressful method helps to ease the pain.'
            />

            <Timeline
              classID='timeline-div'
              month='august'
              activity='Testing (Travis CI) and NPM Build System'
              resourceName='udemy.com'
              resourceLink='https://www.udemy.com/home/my-courses/learning/'
              story='Learning how to test my code sucked. But I see the benefit of it. This was a tough month, but I am grateful because I learned that in order to learn, discomfort must be present.'
            />

            <Timeline
              classID='timeline-div'
              month='july'
              activity='Started learning JavaScript and JQuery'
              resourceName='thinkful.com'
              resourceLink='https://www.thinkful.com/'
              story='Learning Javascript was very challenging, mainly because of how I am as a person. I don&#39;t like not knowing every single detail of a paticular line of code. I learned that seeing the bigger picture is as important.'
            />

            <Timeline
              classID='timeline-div'
              month='june'
              activity='Started learning HTML5 and CSS3'
              resourceName='freecodecamp.com'
              resourceLink='https://www.freecodecamp.com'
              story='Once I&#39;ve decided to learn how to code, I initially had my reservations. Nonetheless, I went for it and narrowed my choices to either learning on my own or participating in a coding bootcamp. I went for the latter.'
            />
            </div>
            <Footer />
        </div>






      </div>
    );
  }
};
