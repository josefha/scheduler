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

  dateToKey(date){
    return format(date,'DD/MM/YYYY')
  }

    handleDeleteShift(id){
        //find index of element
        let shifts = this.state.shifts;

       for(let date in shifts){
         let dayShifts =[...shifts[date]];  // make a separate copy of the array
         console.log(dayShifts); // find all the shifts on a specific date;
           let index = dayShifts.findIndex(x=>x.id ===id);
           dayShifts.splice(index,1);
           shifts[date] = dayShifts;

       }
        this.setState(shifts:shifts);



     //   this.setState({shifts: newAray});

        //console.log(this.state.shifts);




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
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)} date={monday} shifts={shifts[this.dateToKey(monday)]}/>
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)} date={tuesday} shifts={shifts[this.dateToKey(tuesday)]}/>
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)} date={wednesday} shifts={shifts[this.dateToKey(wednesday)]}/>
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)} date={thursday} shifts={shifts[this.dateToKey(thursday)]}/>
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)}  date={friday} shifts={shifts[this.dateToKey(friday)]}/>
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)} date={saturday} shifts={shifts[this.dateToKey(saturday)]}/>
          <CalenderDay onDelete = {this.handleDeleteShift.bind(this)} date={sunday} shifts={shifts[this.dateToKey(sunday)]}/>
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
