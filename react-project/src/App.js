import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import SideTab from './SideTab/SideTab'

import {Grid, Row, Col} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Grid  className="container-fluid">
          <Row className="show-grid no-gutter">
            <Col xs={12} lg={3}>
              <SideTab/>
            </Col>
            <Col xs={12} lg={9}>
              <MainContent/>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default App;
