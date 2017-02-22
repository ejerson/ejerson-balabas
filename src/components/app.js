import React, { Component } from 'react';

import Strip from '../containers/strip';
import Musician from '../containers/musician-menu';
import Ejerson from '../containers/ejerson-menu';
import Developer from '../containers/developer-menu';

export default class App extends Component {
  render() {
    return (
    <div>
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Strip /><Strip /><Strip /><Strip />
      <Musician
        text='musician'
        resumetext='resume'
      />

      <Ejerson
        text='ejerson balabas'
      />

      <Developer
        title='developer'
      />
    </div>
    );
  }
}
