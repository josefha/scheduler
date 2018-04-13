import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import SideTab from './SideTab/SideTab'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1> Hello world </h1>
      <Header/>
      <MainContent/>
      <SideTab/>
      </div>
    );
  }
}

export default App;
