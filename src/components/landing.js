import React, { Component } from 'react';
import Square from './square';


export default class App extends Component {
  render() {
    return (
    <div className="squares-div-container">
      <Square
        className="square-container ejerson"
        title="Ejerson Balabas"
        content="musician developer designer"
      />
      <Square
      className="square-container ejerson"
      title="Contact"
      content="github facebook instagram"
      />
      <Square
      className="square-container ejerson"
      title="Portfolio"
      content="OSTM and two blank spots"
      />
      <Square
      className="square-container ejerson"
      title="Quotes"
      content="Random Quotes"
      />

    </div>
    );
  }
}
