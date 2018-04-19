import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row, Col} from 'react-bootstrap';

//Link to date lib:  https://date-fns.org/v1.29.0/docs/
import subWeeks from 'date-fns/sub_weeks'
import addWeeks from 'date-fns/add_weeks'
import eachDay from 'date-fns/each_day'
import addDays from 'date-fns/add_days'
import startOfWeek from 'date-fns/start_of_week'

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
      mondayDateCurrentWeek: startOfWeek(new Date(),{weekStartsOn: 1}),
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

  createTitles(){
    let titles = ["","","","","","",""]
    let date = this.state.mondayDateCurrentWeek
    let days = eachDay(date, addWeeks(date,1))
    titles[MONDAY] = "Monday " + days[0].getDate()
    titles[TUESDAY] = "Tuesday "+ days[1].getDate()
    titles[WEDNESDAY] = "Wednesday " + days[2].getDate()
    titles[THURSDAY] = "Thursday " + days[3].getDate()
    titles[FRIDAY] = "Friday " + days[4].getDate()
    titles[SATURDAY] = "Saturday " + days[5].getDate()
    titles[SUNDAY] = "Sunday " + days[6].getDate()
    return titles
  }

  render() {
    let titles = this.createTitles()
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
        <Tools addShift={this.addShift}
               shifts={this.state.shifts}
               previousClickEvent={this.changeToPreviousWeek}
               nextClickEvent={this.changeToNextWeek}
               currentClickEvent={this.changeToCurrentWeek}
               currentdate={this.state.mondayDateCurrentWeek}
        />
        </Row>
        <Row className="show-grid">
          <CalenderDay title={titles[MONDAY]}  shifts={listOfShift[MONDAY]}/>
          <CalenderDay title={titles[TUESDAY]} shifts={listOfShift[TUESDAY]}/>
          <CalenderDay title={titles[WEDNESDAY]} shifts={listOfShift[WEDNESDAY]}/>
          <CalenderDay title={titles[THURSDAY]} shifts={listOfShift[THURSDAY]}/>
          <CalenderDay title={titles[FRIDAY]} shifts={listOfShift[FRIDAY]}/>
          <CalenderDay title={titles[SATURDAY]} shifts={listOfShift[SATURDAY]}/>
          <CalenderDay title={titles[SUNDAY]} shifts={listOfShift[SUNDAY]}/>
        </Row>
    </Grid>
    );
  }

  //Button events
  changeToPreviousWeek = () => {
    let oldDate = this.state.mondayDateCurrentWeek
    this.setState({
      mondayDateCurrentWeek: subWeeks(oldDate,1)
    })
  }

  changeToNextWeek = () => {
    let oldDate = this.state.mondayDateCurrentWeek
    this.setState({
      mondayDateCurrentWeek: addWeeks(oldDate,1)
    })
  }

  changeToCurrentWeek = () => {
    this.setState({
      mondayDateCurrentWeek: startOfWeek(new Date(),{weekStartsOn: 1})
    })
  }
}


export default CalenderPage;
