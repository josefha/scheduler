import React, { Component } from 'react';
import { Button, ButtonGroup, MenuItem} from 'react-bootstrap';
import AddShift from './AddShift';
import JoyRide from 'react-joyride'
import '../CalenderPage.css';
import './Tools.css';
import {tools} from './joyRideSteps.js'

import format from 'date-fns/format'

export default class CalanderPage extends Component {

  constructor(props){
    super(props);
    this.state={
      showPopUp : false,
      runDemo : false,
      modalIsOpen: false,
      arrayOfSteps: []
    }
  }
  /*
    This doesn't work yet
  */
  getJoyRideSteps(){

    //console.log(tools);

    this.setState({
      arrayOfSteps:tools
    })

    //console.log("state har: " + this.state.arrayOfSteps);
  }

  togglePopUp = () => {
    this.setState({
      showPopUp : !this.state.showPopUp,
      modalIsOpen: true,
    });
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

  componentDidMount(){
    this.getJoyRideSteps();

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
            <Button bsSize="xsmall" onClick={this.handlePreviousClick} id="lastWeekBtn">Last</Button>
            <Button bsSize="xsmall" onClick={this.handleCurrentClick} id="todayBtn">Today</Button>
            <Button bsSize="xsmall" onClick={this.handleNextClick} id="nextWeekBtn">Next</Button>
          </ButtonGroup>

          <ButtonGroup className="newShiftButtonGroup">
            <Button bsSize="xsmall" bsStyle="success" onClick={this.togglePopUp} id="newShiftBtn">New Shift</Button>
            <Button bsSize="xsmall" bsStyle ="info" onClick={this.startDemo} id="demoBtn" >Demo</Button>
          </ButtonGroup>

        </div>

        {this.state.showPopUp ?
          <AddShift
            event={this.togglePopUp}
            addShift={this.props.addShift}
            shifts={this.props.shifts}
          />
          :null
        }
      </div>
    );
  }
}
