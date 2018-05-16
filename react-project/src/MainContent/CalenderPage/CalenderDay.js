import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';
import Tools from './Tools/Tools';
import Popover from 'react-simple-popover';
//import {Popover,Overlay} from 'react-bootstrap'

import format from 'date-fns/format'

export default class CalenderDay extends Component {
  constructor(props){
    super(props);
      this.state={
          showPopover : false
      }

  }
    togglePopover = () => {
        this.setState({
            showPopover : !this.state.showPopover
        });
    };
    handleClose(e) {
        this.setState({open: false});
    }

  render(){

    let hoursElements = this.createHoursElements();

    return(
    <div className="CalenderDay"   id={this.props.title}>
        <div className = "WeekTitle">
        {format(this.props.date, 'dddd DD')}
        </div>
        <div className = "Shift">
        {hoursElements}
        </div>

            </div>

          );
    }

  createHoursElements() {
    let shiftslist = this.props.shifts
    let hours = []
    let start = -1;
    let middleLen = -1;
    let end = -1;
    let shifts;
    let buffer = "";
    let element = <div> </div>
    // Calculates the start, end and middle hours in the different shifts
    if (shiftslist !== undefined && shiftslist.length != 0 ) {
      shifts = shiftslist[0]
      start = shifts.startTime / 3600;
      end = shifts.endTime / 3600
      middleLen = (end - start) - (start%1);
    }

    let time = ""
    // Iterates and creates the 24 hours. Return a list with 24 hours components
    for (var i = 0; i < 24; i++) {
      // Needs to be +2 because of the start of a shift can also be every whole hour, for example 16:00

        if(start > i && start < i+2 ){
            let shiftHours = [];

            shiftHours[i] = <Hour type="start" key={i.toString()} keyName={i.toString()} time={shifts.startTime}/>;
            //buffer += hours[i];
            i +=1;
            for (var m = 0; m < middleLen-1; m++){
              shiftHours[i] = <Hour type="middle" key={i.toString()} keyName={i.toString()} time={start}/>
                //buffer += hours[i];
              i +=1;
            }
          shiftHours[i] = <Hour type="end" key={i.toString()} keyName={i.toString()} time={shifts.endTime}/>
            //buffer += hours[i]+"</div>";
            let target = shifts.title
            hours[i] =

                <div id = {shifts.title}  ref={target} onClick={this.togglePopover.bind(this)}> { shiftHours }
                <Popover
                         placement="right"
                         container={this}
                         containerPadding = {10}
                         target={this.refs.target}
                         show={this.state.showPopover}
                         onHide={this.handleClose.bind(this)} >
                    <strong> Shift's Title:</strong> {shifts.title}
                    <br/>
                    <strong>Description: </strong>{shifts.description}
                </Popover>
            </div>;
        }
      else{
       hours[i] = <Hour type="empty" key={i.toString()}  keyName={i.toString()} time={start}/>
      }
    }
   console.log(buffer);
    return hours

  }
}
