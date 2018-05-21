import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row} from 'react-bootstrap';

//Link to date lib:  https://date-fns.org/v1.29.0/docs/
import subWeeks from 'date-fns/sub_weeks'
import addWeeks from 'date-fns/add_weeks'
import addDays from 'date-fns/add_days'
import startOfWeek from 'date-fns/start_of_week'
import format from 'date-fns/format'
import uuid  from 'uuid'

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
                 "id":uuid.v4(),
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
    };

    handleDeleteShift(shift) {

        let dict = this.state.shifts;
        let key = format(shift.date,'DD/MM/YYYY');
        delete dict[key];

        this.setState({
            shifts : dict
        });
    }




        createTimeTable(){
    let arrayOfDivs = [];
    for (var i = 0; i < 24; i++) {
      arrayOfDivs[i] = <div key={i+ ":00"} className="timeTable">{i+ ":00"}</div>
    }
    return arrayOfDivs;
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

    let timeTable = this.createTimeTable();

    return (
      <div id="mainPageWrapper">
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
        </Grid>
          <div id="calenderDays">
            <div id="timeTableContainer">{timeTable}</div>
              <div id="daysContainer">
                <CalenderDay date={monday} shifts={shifts[this.dateToKey(monday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                <CalenderDay date={tuesday} shifts={shifts[this.dateToKey(tuesday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                <CalenderDay date={wednesday} shifts={shifts[this.dateToKey(wednesday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                <CalenderDay date={thursday} shifts={shifts[this.dateToKey(thursday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                <CalenderDay date={friday} shifts={shifts[this.dateToKey(friday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                <CalenderDay date={saturday} shifts={shifts[this.dateToKey(saturday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                <CalenderDay date={sunday} shifts={shifts[this.dateToKey(sunday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
              </div>
          </div>
        </div>
    );
  }

  //Button Events
  deleteShift = (shift) => {
    // let dict = this.state.shifts;
    // let key = format(shift.date,'DD/MM/YYYY')
    console.log("Deleting");
    // delete dict[key]
    //
    // this.setState({
    //       shifts : dict
    // });
  }

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
