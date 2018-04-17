import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row, Col} from 'react-bootstrap';

import './CalenderPage.css';

class CalenderPage extends Component {

  constructor(props){
    super(props);
    //shifts structure [dayindex, starttime, endtime]
    this.state = {shifts: []};

  }

  addShift(shift){
    this.setState({
      shifts: this.state.shifts.concat([shift])
    });
  }

  componentWillMount() {
      this.addShift([0,1,10]);
  }

  componentDidMount() {
      this.addShift([3,5,10]);
  }


  render() {
    let shifts = this.state.shifts;
    //listOfShift where index 0 represents Monday..
    let listOfShift = [[],[],[],[],[],[],[]]
    for (var i = 0; i < shifts.length; i++) {
      let dayi = shifts[i][0]
      listOfShift[dayi] = shifts[i]
    }

    return (
      <Grid  className="container-fluid">
        <Row className="show-grid no-gutter">
        <Tools />
        </Row>
        <Row className="show-grid">
          <CalenderDay name="Monday" shifts={listOfShift[0]}/>
          <CalenderDay name="Tuesday" shifts={listOfShift[1]}/>
          <CalenderDay name="Wednesday" shifts={listOfShift[2]}/>
          <CalenderDay name="Thursday" shifts={listOfShift[3]}/>
          <CalenderDay name="Friday" shifts={listOfShift[4]}/>
          <CalenderDay name="Saturday" shifts={listOfShift[5]}/>
          <CalenderDay name="Sunday" shifts={listOfShift[6]}/>
        </Row>
    </Grid>
    );
  }
}


export default CalenderPage;
