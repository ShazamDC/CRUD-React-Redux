import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Crud} from './containers/Crud';

class App extends Component {
  render() {
    return (
<div>
  <h1>CRUD example</h1>
  <Crud/>
  </div>
    );
  }
}

export default App;
