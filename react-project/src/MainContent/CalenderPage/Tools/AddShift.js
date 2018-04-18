import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css'
import './Tools.css';

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const THURSDAY = 3;
  const FRIDAY = 4;
  const SATURDAY = 5;
  const SUNDAY = 6;

export default class AddShift extends Component {

  constructor(){
    super();
    this.state = {shift : {
      "date": "",
      "day" : 0,
      "startTime" : 0,
      "endTime" : 0,
      "disc" : ""
    }}
  }
  // Close the popup
  handleClick = () => {
    this.props.event();
  }

// This function adds the json object to the array shifts
  handleSubmit = (e) => {
    console.log("har submitat");
    e.preventDefault();
    this.props.addShift(this.state.shift);

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
      console.log(this.state.shift);
  }

  render() {
    return (
    <div className='AddShift'>
      <Modal.Dialog>
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
