import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderDay from './CalenderDay';
import {Grid, Row, Col} from 'react-bootstrap';
import Sound from 'react-sound';
import AddShift from './Tools/AddShift';
import './CalenderPage.css';

//Link to date lib:  https://date-fns.org/v1.29.0/docs/
import subWeeks from 'date-fns/sub_weeks'
import addWeeks from 'date-fns/add_weeks'
import addDays from 'date-fns/add_days'
import startOfWeek from 'date-fns/start_of_week'
import format from 'date-fns/format'
import uuid  from 'uuid'

class CalenderPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      mondayDateCurrentWeek: startOfWeek(new Date(),{weekStartsOn: 1}),
      shifts: {},
      showPopUp : false,
    };
  }

    /*
    Handles the modal pop up to add/ a shift
  */
  togglePopUp = () => {
    this.setState({
      showPopUp : !this.state.showPopUp,
    });
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
                "desc" : shift.desc
              }];
    this.setState({
          shifts : dict,
        enableSound:false
      });
    };

    //handler for delete btn
    //removes a shift from state: 'shifts'
    handleDeleteShift(shift) {
        let dict = this.state.shifts;
        let key = format(shift.date,'DD/MM/YYYY');
        delete dict[key];

        this.setState({
            shifts : dict,
            enableSound:true   // Enables sound after a delete
        });
    }

    //Generates html text for clock times
    //00:00 -> 24:00
    createTimeTable(){
      let arrayOfDivs = [];
      arrayOfDivs[0] = <div key="emptyTime" className="timeTable" id="emptyHour"></div>
      for (var i = 1; i < 25; i++) {
        arrayOfDivs[i] = <div key={i-1+ ":00"} className="timeTable">{i-1+ ":00"}</div>
      }
      return arrayOfDivs;
    }

  //change a date to key-format used in
  //the hash map shifts in this.state
  dateToKey(date){
    return format(date,'DD/MM/YYYY')
  }

  //turn sounds on and of depending on props.. Sound doesn't load by using this custom component..Another method is used (see CalendarDay.js)
  toggleSound(props) {
      const enabled = this.state.enableSound;
      if (enabled) {
          return <div>
              <Sound
              url="delete.mp3"
              playStatus={Sound.status.PLAYING}
              playFromPosition={300 /* in milliseconds */}
              onFinishedPlaying={this.setState({
                      enableSound:false
              }
              )}/>
          </div>
        }
        else{
            return "";
        }
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
    let sound = this.toggleSound();

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
                   handlePopUp={this.togglePopUp}
            />
          </Row>
        </Grid>

            <div id="calenderDays">
                <div id="timeTableContainer">{timeTable}</div>
                  <CalenderDay date={monday} shifts={shifts[this.dateToKey(monday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                  <CalenderDay date={tuesday} shifts={shifts[this.dateToKey(tuesday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                  <CalenderDay date={wednesday} shifts={shifts[this.dateToKey(wednesday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                  <CalenderDay date={thursday} shifts={shifts[this.dateToKey(thursday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                  <CalenderDay date={friday} shifts={shifts[this.dateToKey(friday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                  <CalenderDay date={saturday} shifts={shifts[this.dateToKey(saturday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
                  <CalenderDay date={sunday} shifts={shifts[this.dateToKey(sunday)]} onDelete = {this.handleDeleteShift.bind(this)}/>
            </div>
          {sound} // Sound component,

          {this.state.showPopUp ?
            <AddShift
              event={this.togglePopUp}
              addShift={this.addShift}
              shifts={this.state.shifts}
            />
            :null
        }

        </div>
    );
  }

//change to previous week
  changeToPreviousWeek = () => {
    let oldDate = this.state.mondayDateCurrentWeek
    this.setState({
      mondayDateCurrentWeek: subWeeks(oldDate,1)
    })
  }

//changes to next week 
  changeToNextWeek = () => {
    let oldDate = this.state.mondayDateCurrentWeek
    this.setState({
      mondayDateCurrentWeek: addWeeks(oldDate,1)
    })
  }

//changes to current week
  changeToCurrentWeek = () => {
    this.setState({
      mondayDateCurrentWeek: startOfWeek(new Date(),{weekStartsOn: 1})
    })
  }
}


export default CalenderPage;
