import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'
import './Tools.css';

export default class AddShift extends Component {

  constructor(){
    super();
    this.state = {shift : {
      "date": "",
      "day" : 0,
      "startTime" : 11,
      "endTime" : 18,
      "disc" : ""
    }}
  }
  // Close the popup
  handleClick = () => {
    this.props.event();
  }

// This function adds the json object to the array shifts
  handleSubmit = (e) => {
    this.props.addShift(this.state.shift);
    e.preventDefault();
    this.handleClick();
  }

  //Handles the changes in the text input for Description
  handleChange = (e)  =>{
    let shiftCopy = this.state.shift;
    shiftCopy[e.target.name] = e.target.value;
    this.setState({
      shift : shiftCopy

    })
    console.log(this.state.shift);
  }

  handleDayClick = (day) =>{
    let shiftCopy = this.state.shift;
    shiftCopy['date'] = day;
    shiftCopy['day'] = day.getDay();
    this.setState({
      shift: shiftCopy

    })
  }

  handleTime = (e) =>{
    console.log(e.target.name);

  }

  render() {
    return (
    <div className='AddShift'>
      <Modal.Dialog bsSize="large">
        <Modal.Header>
          <Modal.Title> Title </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleSubmit}>

            <label>
              <p>Description:</p>
              <input
                type="text"
                name="disc"
                value={this.state.shift.disc}
                onChange={this.handleChange}>
              </input>
              <p>Start Time</p>
              <TimePicker
                name= "startTime"
                value= "3600"
                format={24}
                start="12:00"
                end="23:59" step={15}
                onChange={this.handleTime}
               />
              <p>End Time</p>
              <TimePicker
                format={24}
                start="12:00"
                end="23:59"
                step={15} />
              <DayPicker onDayClick={this.handleDayClick} firstDayOfWeek={1}/>

            </label>
          <input type="submit" value="submit" />

          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClick} id="CloseBtn"> Close </Button>

        </Modal.Footer>

      </Modal.Dialog>


    </div>
    );
  }
}
