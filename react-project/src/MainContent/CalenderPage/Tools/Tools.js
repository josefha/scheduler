import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import AddShift from './AddShift';
import JoyRide from 'react-joyride';
import '../CalenderPage.css';
import './Tools.css';

import format from 'date-fns/format'

export default class CalanderPage extends Component {

  constructor(props){
    super(props);
    this.state={
      showPopUp : false,
      runDemo : false,
      modalIsOpen: false,
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

        <ButtonGroup className="weekbuttons">
          <Button bsSize="xsmall" onClick={this.handlePreviousClick} id="lastWeekBtn">Last</Button>
          <Button bsSize="xsmall" onClick={this.handleCurrentClick} id="todayBtn">Today</Button>
          <Button bsSize="xsmall" onClick={this.handleNextClick} id="nextWeekBtn">Next</Button>
        </ButtonGroup>

        <ButtonGroup className="newshiftbuttongroup">
          <Button bsSize="xsmall" onClick={this.togglePopUp} id="newShiftBtn">New Shift</Button>
          <Button bsSize="xsmall" onClick={this.startDemo} id="demoBtn" >Demo</Button>
        </ButtonGroup>

        <DropdownButton bsSize="small" title="Staff" id="bg-nested-dropdown" className="dropdownbutton">
            <MenuItem eventKey="1">Eric</MenuItem>
            <MenuItem eventKey="2">Joseph</MenuItem>
            <MenuItem eventKey="2">Alex</MenuItem>
        </DropdownButton>

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
