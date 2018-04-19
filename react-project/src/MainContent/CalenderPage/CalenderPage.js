import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row, Col} from 'react-bootstrap';

import './CalenderPage.css';

  const SUNDAY = 0;
  const MONDAY = 1;
  const TUESDAY = 2;
  const WEDNESDAY = 3;
  const THURSDAY = 4;
  const FRIDAY = 5;
  const SATURDAY = 6;


class CalenderPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      shifts: [
      {
        "date" : "",
        "day" : MONDAY,
        "startTime" : 1,
        "endTime" : 6,
        "disc": "Alex is working"
    },
    {
        "date": "",
        "day" : FRIDAY,
        "startTime" : 15,
        "endTime" : 23,
        "disc": "Go China"
    },
    {
      "date" : "",
      "day" : TUESDAY,
      "startTime" : 16,
      "endTime" : 20,
      "disc" : "Love Elfsborg"
    }
  ]};


  }
// Adds a shift to this.state.shifts
  addShift = (shift) => {
    let obj = this.state.shifts;
    obj =  obj.concat({
                "date" : shift.date,
                "day": shift.date.getDay(),
                "startTime" : shift.startTime,
                "endTime" : shift.endTime,
                "disc" : shift.disc
              });
    this.setState({
          shifts : obj
      });

    console.log(this.state.shifts);
    }


  render() {
    let shifts = this.state.shifts;
    //listOfShift includes the different shift for each day
    let listOfShift = [[],[],[],[],[],[],[]];
    let i = 0;
    shifts.map(shift =>{
      listOfShift[shift.day] = (shift);
      });

    return (
      <Grid  className="container-fluid">
        <Row className="show-grid no-gutter">
        <Tools addShift={this.addShift} shifts={this.state.shifts}/>
        </Row>
        <Row className="show-grid">
          <CalenderDay name="Monday" shifts={listOfShift[MONDAY]}/>
          <CalenderDay name="Tuesday" shifts={listOfShift[TUESDAY]}/>
          <CalenderDay name="Wednesday" shifts={listOfShift[WEDNESDAY]}/>
          <CalenderDay name="Thursday" shifts={listOfShift[THURSDAY]}/>
          <CalenderDay name="Friday" shifts={listOfShift[FRIDAY]}/>
          <CalenderDay name="Saturday" shifts={listOfShift[SATURDAY]}/>
          <CalenderDay name="Sunday" shifts={listOfShift[SUNDAY]}/>
        </Row>
    </Grid>
    );
  }
}


export default CalenderPage;
