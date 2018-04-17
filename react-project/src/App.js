import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import SideTab from './SideTab/SideTab'

import {Grid, Row, Col} from 'react-bootstrap';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {view: "CalenderPage"}
  }

  handleClick = (click) => {
    this.setState({
      view: click
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Grid  className="container-fluid">
          <Row className="show-grid no-gutter">
            <Col xs={12} lg={2}>
              <SideTab event = {this.handleClick} />
            </Col>
            <Col xs={12} lg={10}>
              <MainContent view={this.state.view}/>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
