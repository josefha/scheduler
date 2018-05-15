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
import format from 'date-fns/format'

import './CalenderPage.css';


class CalenderPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      mondayDateCurrentWeek: startOfWeek(new Date(),{weekStartsOn: 1}),
      shifts: {}
    };
  }

// Adds a shift to this.state.shifts
// Notis: ADD support for many shift on same day?
  addShift = (shift) => {
    let dict = this.state.shifts;
    let key = format(shift.date,'DD/MM/YYYY')
    console.log(key)
    dict[key] = [{
                "title" : shift.title,
                "date" : shift.date,
                "day": shift.date.getDay(),
                "startTime" : shift.startTime,
                "endTime" : shift.endTime,
                "disc" : shift.disc
              }];
    this.setState({
          shifts : dict
      });

    }

  dateToKey(date){
    return format(date,'DD/MM/YYYY')
  }

  render() {
    let shifts = this.state.shifts;
    let monday = this.state.mondayDateCurrentWeek
    let tuesday = addDays(monday, 1)
    let wednesday = addDays(monday, 2)
    let thursday = addDays(monday, 3)
    let friday = addDays(monday, 4)
    let saturday = addDays(monday, 5)
    let sunday = addDays(monday, 6)

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
          <CalenderDay date={monday} shifts={shifts[this.dateToKey(monday)]}/>
          <CalenderDay date={tuesday} shifts={shifts[this.dateToKey(tuesday)]}/>
          <CalenderDay date={wednesday} shifts={shifts[this.dateToKey(wednesday)]}/>
          <CalenderDay date={thursday} shifts={shifts[this.dateToKey(thursday)]}/>
          <CalenderDay date={friday} shifts={shifts[this.dateToKey(friday)]}/>
          <CalenderDay date={saturday} shifts={shifts[this.dateToKey(saturday)]}/>
          <CalenderDay date={sunday} shifts={shifts[this.dateToKey(sunday)]}/>
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
