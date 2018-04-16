import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderArea from './CalenderArea/CalenderArea';
import {Grid, Row, Col} from 'react-bootstrap';

import '../MainContent.css';

class CalenderPage extends Component {
  render() {
    return (
      <Grid  className="container-fluid">
        <Row className="show-grid no-gutter">
        <Tools/>
        </Row>
        <Row className="show-grid no-gutter">
          <Col xs={12} lg={12}>
            <CalenderArea/>
          </Col>
        </Row>
    </Grid>
    );
  }
}


export default CalenderPage;
