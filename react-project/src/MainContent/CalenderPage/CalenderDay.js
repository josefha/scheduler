import React, { Component } from 'react';
import './CalenderPage.css';
import Hour from './Hour';

export default class CalenderDay extends Component {
  constuctor(){
    this.super();
    this.state={
      shifts = [];
    }

  }

  render(){
    return(
    <div className="CalenderDay">
        {this.props.name}
        <Hour/>
    </div>

  );
  }
}
