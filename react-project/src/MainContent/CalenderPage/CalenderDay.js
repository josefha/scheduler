import React, { Component } from 'react';
import './CalenderPage.css'

export default class CalenderDay extends Component {
  constuctor(){
    this.super();

  }

  render(){
    return(
    <div className="CalenderDay">{this.props.name}</div>
  );
  }
}
