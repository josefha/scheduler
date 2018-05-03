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


  render(){
    let element;
    let height;
    // Notis: tog bort funktionskallet till displaytime pga den är utdaterad. kan fixas
    let timetext = this.props.time

    if(this.props.type === "middle") {
      element = <div className= "Hours" id="middle">

      </div>;
    }else if (this.props.type === "start") {

      // Calculates the amount of seconds the start hour
      let rest = this.props.time % 3600
      if (rest == 0) {
        height = 100;
      }else{
        // The height of the div in % which should be green
        height = 100 -((rest/3600) * 100)
      }

      // Variables for distinguish the different part divs for each shift
      let innerShiftDiv = "innerShiftDiv" + this.props.keyName;
      let offSet = "offSet" + this.props.keyName;

      // Css rules for each specific innerShiftDiv and offSet div
      const css = "".concat('.',innerShiftDiv,'{height: ',height.toString(),'%; background-color: lightGreen;}', '.', offSet, '{height:',100-height.toString(),'%;}');

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
      let innerShiftDiv = "innerShiftDiv" + this.props.keyName;
      let offSet = "offSet" + this.props.keyName;

      let rest = this.props.time % 3600
      if (rest == 0) {
        height = 100;
      }else{
        // The height of the div in % which should be green
        height = (rest/3600) * 100
      }

      const css = "".concat('.',innerShiftDiv,'{height: ',height.toString(),'%; background-color: lightGreen;}', '.', offSet, '{height:',100-height.toString(),'%;}');
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
