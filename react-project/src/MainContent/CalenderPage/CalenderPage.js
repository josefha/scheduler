import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row, Col} from 'react-bootstrap';

import '../MainContent.css';

class CalenderPage extends Component {
  render() {
    return (
      <Grid  className="container-fluid">
        <Row className="show-grid no-gutter">
        <Tools/>
        </Row>
        <Row className="show-grid">
          <CalenderDay name="Monday"/>
          <CalenderDay name="Tuesday"/>
          <CalenderDay name="Wednesday"/>
          <CalenderDay name="Thursday"/>
          <CalenderDay name="Friday"/>
          <CalenderDay name="Saturday"/>
          <CalenderDay name="Sunday"/>

        </Row>
    </Grid>
    );
  }
}


export default CalenderPage;
