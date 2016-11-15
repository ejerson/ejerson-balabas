import React, { Component } from 'react';



export default class App extends Component {
  render() {
    return (
    <div>
      <div className="developer">
        <h1>developer</h1>
      </div>
      <div className='human'>
        <h1 className='human-text'>Ejerson Balabas</h1>
      </div>
      <div className='musician'>
        <h1>musician</h1>
      </div>
      <div className='contact'>
      <img className='github' src={require('../../public/images/github.png')} />
      </div>
    </div>
    );
  }
}
