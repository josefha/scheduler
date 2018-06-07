import React, { Component } from 'react';
import CalenderPage from './CalenderPage/CalenderPage'
import StaffPage from './StaffPage/StaffPage'
import './MainContent.css';


class MainContent extends Component {

  //Checks what page should be shown
  //and returns html for that page
  returnCurrentView(){
    if (this.props.view === "calenderPage"){
      return <CalenderPage/>
    }else{
      return <StaffPage/>
    }
  }

  render() {
    return (
      <div id='MainContent'>
          {this.returnCurrentView()}
      </div>
    );
  }
}

export default MainContent;
