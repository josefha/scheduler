import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import SideTab from './SideTab/SideTab'

import {Grid, Row, Col} from 'react-bootstrap';
import Login from "./Login";
//hello test

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
    if(this.state.authorized ===true){
      return (
          <div className="App">
              <Header event={this.handleClick}/>
              <Grid  className="container-fluid">
                  <Row className="show-grid no-gutter">                  
                      <Col xs={10} lg={10}>
                          <MainContent view={this.state.view}/>
                      </Col>
                  </Row>
              </Grid>

          </div>
      );}
      else{
      return(<Login event = {this.handleAuthorized}/>)
       // return(<Login/>)
    }

  }

  render() {
    return(
    <div>
        {this.returnCurrentView()}
    </div>)

  }
}

export default App;
