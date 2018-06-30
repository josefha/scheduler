import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import Login from "./Login";

class App extends Component {
  constructor(props){
    super(props);
    // Change the authorized to true to skip the login page
    this.state = {view: "calenderPage",
    authorized:true,
        email:""
    }
  }

  //Event handler for login btn
  handleClick = (click) => {
    this.setState({
      view: click
    });
  }

  //Event handler for login
  handleAuthorized = (a,b) => {
      this.setState({
          authorized: a,
          email:b
      });
  }

  //Check if user loged in or not
  //Desides which view to show
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
