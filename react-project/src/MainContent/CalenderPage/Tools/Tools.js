import React, { Component } from 'react';
import { Button, ButtonGroup, MenuItem} from 'react-bootstrap';
import AddShift from './AddShift';
import JoyRide from 'react-joyride'
import '../CalenderPage.css';
import './Tools.css';
import {tools} from './strings.js'


import format from 'date-fns/format'

export default class CalanderPage extends Component {

  constructor(props){
    super(props);
    this.state={
      runDemo : false,
      arrayOfSteps: [
        {
          target: '#nextWeekBtn',
          content: 'Press to get to the next week',
          disableBeacon: true
        },
        {
          target: '#todayBtn',
          content: 'Press to get to the current week'
        },
        {
          target: '#lastWeekBtn',
          content: 'Press to get to the previous week',
          placement: 'left',
        },
        {
          target: '#newShiftBtn',
          content: 'Press to add a new shift'
        },
      ]
    }
  }

  togglePopUp = () => {
    this.props.handlePopUp()

  }


  handlePreviousClick = () => {
    this.props.previousClickEvent()
  }

  handleNextClick = () => {
    this.props.nextClickEvent()
  }

  handleCurrentClick = () => {
    this.props.currentClickEvent()
  }

  startDemo= () => {
    this.setState({
      runDemo: !this.state.runDemo,
    });
  }

  getStrings(type){
    let data = tools;
    return data[type];
  }

  render() {
    let monthTitle = format(this.props.currentdate,'MMMM')
    let yearTitle = format(this.props.currentdate,'YYYY')
    return (
      <div className="Tooldiv">
        <div className="titleDiv">
          <p className="monthTitle"> {monthTitle} </p>
          <p className="yearTitle"> {yearTitle} </p>
        </div>

        <div  className="menuDiv">
          <JoyRide
            steps={this.state.arrayOfSteps}
            run={this.state.runDemo}
            debug={true}
            continuous ={true}
            showProgress={true}
            spotlightClicks={true}
          />

          <ButtonGroup className="weekButtons">
            <Button bsSize="xsmall" onClick={this.handlePreviousClick} id="lastWeekBtn">{this.getStrings("lastBtn")}</Button>
            <Button bsSize="xsmall" onClick={this.handleCurrentClick} id="todayBtn">{this.getStrings("todayBtn")}</Button>
            <Button bsSize="xsmall" onClick={this.handleNextClick} id="nextWeekBtn">{this.getStrings("nextBtn")}</Button>
          </ButtonGroup>

          <ButtonGroup className="newShiftButtonGroup">
            <Button bsSize="xsmall" bsStyle="success" onClick={this.togglePopUp} id="newShiftBtn">{this.getStrings("newShiftBtn")}</Button>
            <Button bsSize="xsmall" bsStyle ="info" onClick={this.startDemo} id="demoBtn" >{this.getStrings("demoBtn")}</Button>
          </ButtonGroup>

        </div>

      </div>
    );
  }
}
