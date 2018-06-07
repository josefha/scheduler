import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';
import {Popover,OverlayTrigger,Button} from 'react-bootstrap'
import {calenderDays} from './Tools/strings.js'
import format from 'date-fns/format'

export default class CalenderDay extends Component {

  constructor(){
    super();
    this.state={
      screenWidth: 0,
      screenHeight: 0,

    };
      //Evil sound loading
      this.url = "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg";
      this.audio = new Audio(this.url);
      this.audio.currentTime = 0;
      this.togglePlay = this.togglePlay.bind(this);
  }

  //Audio handler for delete btn
    togglePlay() {
        this.setState({ play: !this.state.play });
        this.state.play ? this.audio.play() : this.audio.play();
    }

    /*
      Add event listener for resizing the window
    */
  componentWillMount(){
    this.setViewPort();
    window.addEventListener("resize",this.setViewPort);
  }


  /*
    Remove event listener
 */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  getStrings(type){
    let data = calenderDays
    return data[type];
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

    //Deletes a shift from the state where
    //thay are stored in calanderPage.js
    deleteShift(id,date){
        this.props.onDelete(id);
        this.togglePlay();
    }

    //Converts an hour in seconds to string
    //and rounds in to closest quarter
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

    //Converts time in minutes
     parseTime(s) {
        var c = s.split(':');
        return parseInt(c[0]) * 60 + parseInt(c[1]);
    }

    //Logic and creating of the hours html elements
    //Shifts are inserted if they exist on that day
    createHoursElements() {
      let shiftslist = this.props.shifts;
      let hours = []
      let start = -1;
      let middleLen = -1;
      let end = -1;
      let shifts;

      let timeInStart, timeInEnd;

      // Calculates the start, end and middle hours in the different shifts
      if (shiftslist !== undefined && shiftslist.length !== 0 ) {
        shifts = shiftslist[0]
        start = shifts.startTime / 3600;
        end = shifts.endTime / 3600;

        if(end%1 == 0)
          timeInEnd = 1;
        else
          timeInEnd = end%1;

        if(start%1 == 0)
          timeInStart = 1;
        else
          timeInStart = 1-(start%1);

        middleLen = (end - start) - timeInStart - timeInEnd;
      }


    // Iterates and creates the 24 hours. Return a list with 24 hours components
    for (var i = 0; i < 24; i++) {
      // Needs to be +2 because of the start of a shift can also be every whole hour, for example 16:00
        if(start >= i && start < i+1 ){

          let shiftHours = [];

          shiftHours[i] = <Hour type="start" key={i.toString()}
                            keyName={format(this.props.date, 'YYYYDDD')}
                            time={shifts.startTime}
                            endtime={shifts.endTime}/>;
          //buffer += hours[i];
            i +=1;
            for (var m = 0; m <= middleLen-1; m++){
              shiftHours[i] = <Hour type="middle" key={i.toString()}
                                keyName={i.toString()}
                                time={start}/>
                //buffer += hours[i];
              i +=1;
            }
          shiftHours[i] = <Hour type="end" key={i.toString()}
                            keyName={format(this.props.date, 'YYYYDDD')}
                            time={shifts.endTime}/>
            //buffer += hours[i]+"</div>";
            //let target = shifts.title;
            const start = this.displaytime(shifts.startTime);
            const end = this.displaytime(shifts.endTime);
            const  duration = this.parseTime(end) - this.parseTime(start) ;
            // Calculate minutes and hours
            let m = duration % 60;
            let h = Math.floor(duration / 60);

            const popoverRight = <Popover id="popover-positioned-right" title={shifts.title} style={{opacity: 12}}>


                <strong>{this.getStrings("start")} </strong> {start}
                <br/>
                <strong>{this.getStrings("end")} </strong>{this.displaytime(shifts.endTime)}
                <br/>
                <strong>{this.getStrings("duration")} </strong>
                {h}  {this.getStrings("hours")}
                {m}  {this.getStrings("minutes")}

                <br/>
                <strong>{this.getStrings("descr")}</strong>
                {shifts.desc}
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
