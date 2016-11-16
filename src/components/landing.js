import React, { Component } from 'react';
import Square from './square';


export default class App extends Component {
  render() {
    return (
    <div className="squares-div-container">
      <Square
        title="Ejerson Balabas"
        content="musician developer designer"
      />
      <Square
      title="Contact"
      content="github facebook instagram"
      />
      <Square
      title="Portfolio"
      content="OSTM and two blank spots"
      />
      <Square
      title="Quotes"
      content="Random Quotes"
      />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
    );
  }
}
