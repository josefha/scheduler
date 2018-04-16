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
    let timetext = this.displaytime(this.props.time)

    if(this.props.type === "middle") {
      element = <div className= "Hours" id="middle">middle</div>;
    }else if (this.props.type === "start") {
      element = <div className= "Hours" id="start">start</div>;
    }else if (this.props.type === "end") {
      element = <div className= "Hours" id="end">end</div>;
    }else{
      element = <div className= "Hours"></div>;
    }
    return(
      element
  );
  }
}