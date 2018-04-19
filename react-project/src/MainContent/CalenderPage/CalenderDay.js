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
          <div className="CalenderDay" id={this.props.name}>
              <div className = "WeekTitle">
              {this.props.title}
              </div>
              {hoursElements}
          </div>
    );
    }

  createHoursElements() {
    let shifts = this.props.shifts
    let hours = []
    let start = -1;
    let shiftLen = -1;
    if (shifts != null) {
      start = shifts.startTime
      shiftLen = shifts.endTime-start
    }

    let time = ""

    for (var i = 0; i < 24; i++) {
        if(i === start){
            hours[i] = <Hour type="start" key={i.toString()} time={i.toString()}/>
            i +=1;
            for (var m = 0; m < shiftLen-2; m++){
              hours[i] = <Hour type="middle" key={i.toString()} time={i.toString()}/>
              i +=1;
            }
          hours[i] = <Hour type="end" key={i.toString()} time={i.toString()}/>
        }
      else{
        hours[i] = <Hour type="empty" key={i.toString()} time={i.toString()}/>
      }
    }

    return(
    <div className="CalenderDay"   ref="target" onClick={this.togglePopover.bind(this)} id={this.props.name}>
        <div className = "WeekTitle">
        {this.props.name}
        </div>
        {hours}
            <Popover className="Info"
                placement='left'
                container={this}
                target={this.refs.target}
                show={this.state.showPopover}
                onHide={this.handleClose.bind(this)} >
               
                {shifts.disc}
            </Popover>


    </div>

  );

    return hours

  }
}


