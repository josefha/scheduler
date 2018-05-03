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
    // Notis: tog bort funktionskallet till displaytime pga den är utaderad. kan fixas
    let timetext = this.props.time

    if(this.props.type === "middle") {
      element = <div className= "Hours" id="middle">

      </div>;
    }else if (this.props.type === "start") {
      let height = 3600 / this.props.time
      const css = '.innerShiftDiv {height: 50%; background-color: lightGreen;} .offSet {height: 50%;} '

      element = <div className= "Hours" id="start" >
        <div className="offSet" >
          <style>{css}</style>


        </div>
        <div className="innerShiftDiv">
          {timetext}
          <style>{css}</style>

        </div>

      </div>
    }else if (this.props.type === "end") {
      element = <div className= "Hours" id="end"></div>;
    }else{
      element = <div className= "Hours"></div>;
    }
    return(
      element
  );
  }
}
