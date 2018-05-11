import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import AddShift from './AddShift'
import introJs from 'intro.js';
import '../CalenderPage.css';
import './Tools.css';

import format from 'date-fns/format'

export default class CalanderPage extends Component {

  constructor(props){
    super(props);
    this.state={
      showPopUp : false
    }
  }

  togglePopUp = () => {
    this.setState({
      showPopUp : !this.state.showPopUp
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

  startDemo = () => {
    console.log("Demo started");
    introJs("#todayBtn").start();

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

        <ButtonGroup>
          <Button onClick={this.handlePreviousClick}>Last</Button>
          <Button onClick={this.handleCurrentClick} data-intro='Hello test' id="todayBtn">Today</Button>
          <Button onClick={this.handleNextClick} data-intro='step 2'>Next</Button>
          <Button onClick={this.startDemo} >Demo</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button onClick={this.togglePopUp}>New Shift</Button>
          <Button>Redo</Button>
          <Button>Undo</Button>
        </ButtonGroup>

        <DropdownButton title="Staff" id="bg-nested-dropdown">
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
