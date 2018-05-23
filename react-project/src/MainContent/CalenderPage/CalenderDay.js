import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';
import {Popover,OverlayTrigger} from 'react-bootstrap'


import format from 'date-fns/format'

export default class CalenderDay extends Component {

  constructor(){
    super();
    this.state={
      screenWidth: 0,
      screenHeight: 0
    }
  }

  /*
    Add event listener for resizing the window
  */


  componentDidMount(){
    this.setViewPort();
    window.addEventListener("resize",this.setViewPort);

  }
  /*
    Remove event listener
 */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


    render(){
      let hoursElements = this.createHoursElements();
      let date;
      /*
        Check and formats the date depending on the screen size
      */
      if (this.state.screenWidth > 400) {
        date = format(this.props.date, 'dddd DD');
      }else{
        date = format(this.props.date, 'dd DD');
      }

      return(
        <div className="CalenderDay"   id={this.props.title}>
            <div className = "WeekTitle">
            {date}
            </div>
            <div className = "Shift">
            {hoursElements}
            </div>
        </div>
      );
    }



  /*
    Function to get the size of the viewport
    Returns: array with the width and height of the viewport
  */
  setViewPort = () => {
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

    this.setState({
        screenWidth:x,
        screenHeight:y,
    })

  }

    deleteShift(id,date){
        this.props.onDelete(id);
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


                <strong>Start: </strong> {shifts.startTime/3600}
                <br/>
                <strong>End: </strong>{shifts.endTime/3600}
                <br/>
                <strong>Description: </strong>
                {shifts.disc}
                <br/>
                <button className="btn-danger" style={{margin: 'auto', display: 'block'}} id = "delete" onClick={this.deleteShift.bind(this,shifts)}>Delete</button>

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
