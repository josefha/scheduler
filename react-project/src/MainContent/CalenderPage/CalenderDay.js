import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';
//import Popover from 'react-simple-popover';
import {Popover,OverlayTrigger} from 'react-bootstrap'

import format from 'date-fns/format'

export default class CalenderDay extends Component {

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

    deleteShift(id,date){
        this.props.onDelete(id);
    }
    displaytime(hour){
        if (hour % 3600 === 0) {
            return hour/3600 + ":00"
        }else if(hour % 3600 === 900 ){
            return Math.floor(hour/3600) + ":15"
        }else if(hour%3600 === 1800){
            return Math.floor(hour/3600) + ":30"
        }else{
            return Math.floor(hour/3600) + ":45"
        }

    }


    createHoursElements() {
      let shiftslist = this.props.shifts
      let hours = []
      let start = -1;
      let middleLen = -1;
      let end = -1;
      let shifts;
      //et buffer = "";

      // Calculates the start, end and middle hours in the different shifts
      if (shiftslist !== undefined && shiftslist.length !== 0 ) {
        shifts = shiftslist[0]
        start = shifts.startTime / 3600 + 1;
        end = shifts.endTime / 3600 + 1;
        middleLen = (end - start) - (start%1);
      }
//Formats hour variables


    // Iterates and creates the 24 hours. Return a list with 24 hours components
    for (var i = 0; i < 24; i++) {
      // Needs to be +2 because of the start of a shift can also be every whole hour, for example 16:00

        if(start > i && start < i+2 ){
            let shiftHours = [];

            shiftHours[i] = <Hour type="start" key={i.toString()}
                              keyName={i.toString()}
                              time={shifts.startTime}
                              endtime={shifts.endTime}/>;
            //buffer += hours[i];
            i +=1;
            for (var m = 0; m < middleLen-1; m++){
              shiftHours[i] = <Hour type="middle" key={i.toString()} keyName={i.toString()} time={start}/>
                //buffer += hours[i];
              i +=1;
            }
          shiftHours[i] = <Hour type="end" key={i.toString()} keyName={i.toString()}/>
            //buffer += hours[i]+"</div>";
            //let target = shifts.title;
            const popoverRight = <Popover id="popover-positioned-right" title={shifts.title} style={{opacity: 12}}>


                <strong>Start: </strong> {this.displaytime(shifts.startTime)}
                <br/>
                <strong>End: </strong>{this.displaytime(shifts.endTime)}
                <br/>
                <strong>Description: </strong>
                {shifts.disc}
                <br/>
                <button class="btn-danger" style={{margin: 'auto', display: 'block'}} id = "delete" onClick={this.deleteShift.bind(this,shifts)}>Delete</button>

                </Popover>;

            hours[i] =

                <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>
                <div id = {shifts.title}>
                    { shiftHours }
                </div>
                </OverlayTrigger>
        }
      else{
       hours[i] = <Hour type="empty" key={i.toString()}  keyName={i.toString()} time={start}/>
      }
    }

   return hours

  }
}
