import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row, Col} from 'react-bootstrap';

import './CalenderPage.css';


  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const THURSDAY = 3;
  const FRIDAY = 4;
  const SATURDAY = 5;
  const SUNDAY = 6;

class CalenderPage extends Component {



  constructor(props){
    super(props);
    //shifts structure [dayindex, starttime, endtime]
    this.state = {shifts: [
      {
        "day" : MONDAY,
        "startTime" : 1,
        "endTime" : 6
    },
    {
        "day" : FRIDAY,
        "startTime" : 15,
        "endTime" : 23
    },
    {
      "day" : TUESDAY,
      "startTime" : 16,
      "endTime" : 20
    }
  ]};

  }

  addShift(shift){
    /*shifts.map(ashift =>{
      this.setState({
      //  shifts: this.state.shifts.concat([shift])
      });
    })
*/
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
        <Tools/>
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
