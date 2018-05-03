import React, { Component } from 'react';
import './CalenderPage.css'

export default class Hour extends Component {


  displaytime(hour){
    if(hour.length > 1){
      return hour+":00"
    }else{
      return "0"+hour+":00"
    }

  }
  /*
    Calculates and styles the start and the end of each shift.
    Input:
    The type of the shift, Eg. start or end
    Returns:
    a string from styling the css
    a string as a name for the inneShiftDiv
    a string as a name for the offSet
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
      '%; background-color: lightGreen;}',
      '.',
      offSet,
      '{height:',
      100-height.toString(),
      '%;}');

      console.log(type + "  " + css )
      return [css,innerShiftDiv,offSet]

  }


  render(){
    let element;
    let height;
    // Notis: tog bort funktionskallet till displaytime pga den är utdaterad. kan fixas
    let timetext = this.props.time

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
          {timetext/3600}
          <style>{css}</style>

        </div>

      </div>
    }else if (this.props.type === "end") {

      const css = this.createStyleForShifts("end")[0];
      let innerShiftDiv = this.createStyleForShifts("end")[1]
      let offSet = this.createStyleForShifts("end")[2]
      element = <div className= "Hours" id="end">


        <div className={innerShiftDiv}>
          {timetext/3600}
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
      element
  );
  }
}
