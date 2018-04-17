import React, { Component } from 'react';
import CalenderPage from './CalenderPage/CalenderPage'
import './MainContent.css';


class MainContent extends Component {


  render() {
    return (
    <div id='MainContent'>
        <CalenderPage/>
    </div>
    );
  }
}

export default MainContent;
