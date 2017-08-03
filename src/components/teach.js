import React from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from '../containers/navigation';
import Timeline from '../containers/timeline';

export default React.createClass({
  render() {
    return (
      <div>
        <Strips />
        <Navigation />
          <div className='teach-div'>

              <h1 className='main-div-title'>why teach?</h1>
              <h2 className='page-intro'>Teaching is something that requires <span className="word-emphasis">patience</span>, understanding, more patience, and the <span className="word-emphasis">never ending</span> quest to learn.
              As a teacher, I work to <span className="word-emphasis">relate</span> the knowledge I have acquired throughout the years,
              and ensure that my students <span className="word-emphasis">learn</span> to become <span className="word-emphasis">independent</span> learners by providing them with the tools necessary to succeed.
              </h2>
              <hr />
              <h1 className='main-div-title'>testimonials</h1>
              <Timeline
                classID='timeline-div'
                name='Cameron Lang'
                picture='http://i1146.photobucket.com/albums/o539/e26dge/Cameron_zps3pxye7ft.jpg'
                story='Getting to train with Ejerson over the past year and a half has helped me grow enormously as a singer and performer. It is apparent in his teaching that he really has his students best interests in mind and his ability to communicate his techniques to singers of different skill levels is incredible. He teaches you to sing in a healthy way, but he also makes you think for yourself about how you got there to make sure you really understand the techniques. Ejerson is an incredible teacher who pushes and inspires you to be better everyday. '
              />
              <Timeline
                classID='timeline-div'
                name='Daniella Castorena'
                picture='http://i1146.photobucket.com/albums/o539/e26dge/Daniella_zpso24zikw5.jpg'
                story='It is refreshing to find a teacher that can inspire you professionally and personally. Ejerson makes singing fun, educational, and healthy. The journey I have been through (with Ejerson) has made an impact in my life because he approaches students, like myself, in individualized ways based on different learning styles.'
              />
              <Timeline
                classID='timeline-div'
                name='Trystan Harpold'
                picture='http://i1146.photobucket.com/albums/o539/e26dge/Trystan_zps6ccsjjm8.jpg'
                story='I have worked extensively with Mr. Balabas in and out of class, and it has been an absolute pleasure. He is not only a teacher but also a mentor and a friend to his students. Always patient and provocative in his interactions with his classes. He is always interested in student progress and in higher learning. Not only this but actually cares about students opinions and weighs it when creating curriculum. Mr. Balabas has a great way of making the class informative and thought provoking while keeping the students abilities and well-being in mind. He is a fantastic teacher and a great mentor.'
              />
              <Timeline
                classID='timeline-div'
                name='Ashley Greer-Cuento'
                picture='http://i1146.photobucket.com/albums/o539/e26dge/Ashley_zpsphicmts1.jpg'
                story='Ejerson really found what worked for me. He shared many years of experience with me in every lesson that was tailored just for me. Ejerson&#39;s immersion and sincere sense of responsibility for his role in my progression really speak to his character and is demonstrated in his teaching. I could not recommend a more sophisticated and suitable teacher for anyone at any age or expertise.'
              />

        </div>
      </div>
    );
  }
});
