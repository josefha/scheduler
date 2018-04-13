import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import SideTab from './SideTab/SideTab'

import { Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SideTab/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
