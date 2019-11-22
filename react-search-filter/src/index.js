import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  render() {
    return ( 
        <Hello/>
    );
  }
}

render(<App />, document.getElementById('root'));
