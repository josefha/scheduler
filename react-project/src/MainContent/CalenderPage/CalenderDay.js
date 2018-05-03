import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';
import Tools from './Tools/Tools';
import Popover from 'react-simple-popover';

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

    let hoursElements = this.createHoursElements()

    return(
    <div className="CalenderDay"   ref="target" onClick={this.togglePopover.bind(this)} id={this.props.title}>
        <div className = "WeekTitle">
        {this.props.title}
        </div>
        {hoursElements}
            <Popover className="Info"
                placement='left'
                container={this}
                target={this.refs.target}
                show={this.state.showPopover}
                onHide={this.handleClose.bind(this)} >

                {this.props.shifts.disc}
            </Popover>
            </div>

          );
    }

  createHoursElements() {
    let shifts = this.props.shifts
    let hours = []
    let start = -1;
    let middleLen = -1;
    let end = -1;
    // Calculates the start, end and middle hours in the different shifts
    if (shifts != null) {
      start = shifts.startTime / 3600;
      end = shifts.endTime / 3600
      middleLen = (end - start) - (start%1);
    }

    let time = ""

    for (var i = 0; i < 24; i++) {
      // Needs to be +2 because of the start of a shift can also be every whole hour, for example 16
        if(start > i && start < i+2 ){
            hours[i] = <Hour type="start" key={i.toString()} keyName={i.toString()} time={shifts.startTime}/>
            i +=1;
            for (var m = 0; m < middleLen-1; m++){
              hours[i] = <Hour type="middle" key={i.toString()} keyName={i.toString()} time={start}/>
              i +=1;
            }
          hours[i] = <Hour type="end" key={i.toString()} keyName={i.toString()} time={shifts.endTime}/>
        }
      else{
        hours[i] = <Hour type="empty" key={i.toString()}  keyName={i.toString()} time={start}/>
      }
    }
    return hours

  }
}
