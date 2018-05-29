import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Login from "./Login";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {view: "calenderPage",
    authorized:true,
        email:""
    }

    // Changed the authorized to true so i can skip the login page
  }

  handleClick = (click) => {
    this.setState({
      view: click
    });
  }

  handleAuthorized = (a,b) => {
      this.setState({
          authorized: a,
          email:b
      });
  }

  returnCurrentView(){
    if(this.state.authorized === true){
      return (
          <div className="App">
              <Header event={this.handleClick}/>
              <MainContent view={this.state.view}/>
          </div>
      );
    }
    else{
      return(<Login event = {this.handleAuthorized}/>)
       // return(<Login/>)
    }

  }

  render() {
    return(
      <div>
          {this.returnCurrentView()}
      </div>
  )}
}

export default App;
