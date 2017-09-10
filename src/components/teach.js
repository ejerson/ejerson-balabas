import React from 'react';
import { Link } from 'react-router';

import Strips from '../containers/strips';
import Navigation from './navigation';
import Timeline from '../containers/timeline';

import Footer from './footer';

export default React.createClass({
  render() {
    return (
      <div>
        <Strips />
        <Navigation />
          <div className='teach-div'>
            <div className='div-content'>
              <h1 className='main-div-title'>why teach?</h1>
              <h2 className='page-intro'>Teaching is something that requires <span className="word-emphasis">patience</span>, understanding, more patience, and the <span className="word-emphasis">never ending</span> quest to learn.
              As a teacher, I work to <span className="word-emphasis">relate</span> the knowledge I have acquired throughout the years,
              and ensure that my students <span className="word-emphasis">learn</span> to become <span className="word-emphasis">independent</span> learners by providing them with the tools necessary to succeed.
              </h2>
              <h1 className='main-div-title'>testimonials</h1>

              <div className='timeline-div'>
                <div className='timeline-left'>
                  <img className='testimonial-pic' src={require('./images/Cameron.jpg')} />
                </div>
                <div className='timeline-right'>
                  <h2>Cameron Lang</h2>
                  <h3 className='code-para'>
                    Getting to train with Ejerson over the past year and a half has helped me grow enormously as a singer and performer. It is apparent in his teaching that he really has his students best interests in mind and his ability to communicate his techniques to singers of different skill levels is incredible. He teaches you to sing in a healthy way, but he also makes you think for yourself about how you got there to make sure you really understand the techniques. Ejerson is an incredible teacher who pushes and inspires you to be better everyday.
                  </h3>
                </div>
              </div>

              <div className='timeline-div'>
                <div className='timeline-left'>
                  <img className='testimonial-pic' src={require('./images/Daniella.jpg')} />
                </div>
                <div className='timeline-right'>
                  <h2>Daniella Castorena</h2>
                  <h3 className='code-para'>
                    It is refreshing to find a teacher that can inspire you professionally and personally. Ejerson makes singing fun, educational, and healthy. The journey I have been through (with Ejerson) has made an impact in my life because he approaches students, like myself, in individualized ways based on different learning styles.
                  </h3>
                </div>
              </div>

              <div className='timeline-div'>
                <div className='timeline-left'>
                  <img className='testimonial-pic' src={require('./images/Trystan.jpg')} />
                </div>
                <div className='timeline-right'>
                  <h2>Trystan Harpold</h2>
                  <h3 className='code-para'>
                    I have worked extensively with Mr. Balabas in and out of class, and it has been an absolute pleasure. He is not only a teacher but also a mentor and a friend to his students. Always patient and provocative in his interactions with his classes. He is always interested in student progress and in higher learning. Not only this but actually cares about students opinions and weighs it when creating curriculum. Mr. Balabas has a great way of making the class informative and thought provoking while keeping the students abilities and well-being in mind. He is a fantastic teacher and a great mentor.
                  </h3>
                </div>
              </div>

              <div className='timeline-div'>
                <div className='timeline-left'>
                  <img className='testimonial-pic' src={require('./images/Ashley.jpg')} />
                </div>
                <div className='timeline-right'>
                  <h2>Ashley Greer-Cuento</h2>
                  <h3 className='code-para'>
                    Ejerson really found what worked for me. He shared many years of experience with me in every lesson that was tailored just for me.
                    Ejerson&#39;s immersion and sincere sense of responsibility for his role in my progression really speak to his character and is demonstrated in his teaching. I could not recommend a more sophisticated and suitable teacher for anyone at any age or expertise.
                  </h3>
                </div>
                </div>
              </div>

                <Footer />

        </div>


      </div>
    );
  }
});
