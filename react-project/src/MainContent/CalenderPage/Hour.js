import React, { Component } from 'react';
import './CalenderPage.css'

export default class Hour extends Component {

  // Displays the correct time
  displaytime(hour){
    if (hour % 3600 == 0) {
      return hour/3600 + ":00"
    }else if(hour % 3600 == 900 ){
      return Math.floor(hour/3600) + ":15"
    }else if(hour%3600 == 1800){
      return Math.floor(hour/3600) + ":30"
    }else{
      return Math.floor(hour/3600) + ":45"
    }

  }
  /*
    Calculates and styles the start and the end of each shift.
    Input:
    The type of the shift, Eg. start or end
    Returns:
    a string for styling the css
    a string as a name for the div called inneShiftDiv
    a string as a name for the div called offSet
   */
  createStyleForShifts(type){
    let innerShiftDiv = "innerShiftDiv" + this.props.keyName;
    let offSet = "offSet" + this.props.keyName;
    let height;

    let rest = this.props.time % 3600
    if (rest == 0) {
      height = 100;
    }else if(type=="end"){
      // The height of the div in % which should be green
      height = (rest/3600) * 100
    }else if(type=="start"){
      height = 100 -((rest/3600) * 100)
    }

    const css = "".concat('.',
      innerShiftDiv,
      '{height: ',
      height.toString(),
      '%; background-color: #9CF18F;padding-left:5px;padding-top:2px;}',
      '.',
      offSet,
      '{height:',
      100-height.toString(),
      '%;}');

      return [css,innerShiftDiv,offSet]

  }

  highOrderComponent(element){
    return <div className="wrapper">{element}</div>
  }

  render(){
    let element;
    let height;
    let startTimeText = this.displaytime(this.props.time);
    let endTimeText = this.displaytime(this.props.endtime);

    if(this.props.type === "middle") {
      element = <div className= "Hours" id="middle">

      </div>;
    }else if (this.props.type === "start") {

      // Css rules for each specific innerShiftDiv and offSet div
      const css = this.createStyleForShifts("start")[0];
      let innerShiftDiv = this.createStyleForShifts("start")[1]
      let offSet = this.createStyleForShifts("start")[2]

      element = <div className= "Hours" id="start" >
        <div className={offSet} >
          <style>{css}</style>


        </div>
        <div className={innerShiftDiv}>
          {startTimeText + " - " + endTimeText}
          <style>{css}</style>

        </div>

      </div>
    }else if (this.props.type === "end") {

      const css = this.createStyleForShifts("end")[0];
      let innerShiftDiv = this.createStyleForShifts("end")[1]
      let offSet = this.createStyleForShifts("end")[2]
      element = <div className= "Hours" id="end">

        <div className={innerShiftDiv}>
          <style>{css}</style>

        </div>

        <div className={offSet} >
          <style>{css}</style>

        </div>

        </div>;
    }else{
      element = <div className= "Hours"></div>;
    }
    return(
      this.highOrderComponent(element)
  );
  }
}
