import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';

export default class CalenderDay extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let shifts = this.props.shifts
    let hours = []
    let start = -1;
    let shiftLen = -1;
    if (shifts.length > 0) {
      console.log("found shift")
      start = shifts[1]
      shiftLen = shifts[2]-start
    }

    let time = ""

    for (var i = 0; i < 24; i++) {
        if(i === start){
            hours[i] = <Hour type="start" key={i.toString()} time={time}/>
            i +=1;
            for (var m = 0; m < shiftLen-2; m++){
              hours[i] = <Hour type="middle" key={i.toString()} time={time}/>
              i +=1;
            }
          hours[i] = <Hour type="end" key={i.toString()} time={time}/>
        }
      else{
        hours[i] = <Hour type="empty" key={i.toString()} time={time}/>
      }
    }

    return(
    <div className="CalenderDay">
        {this.props.name}
        {hours}
    </div>

  );
  }
}