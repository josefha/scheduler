import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import DayPickerInput from 'react-day-picker/DayPickerInput';
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
      "day" : 0,
      "startTime" : 0,
      "endTime" : 0,
      "disc" : ""
    }}
  }

  handleClick = () => {
    this.props.event();
  }

// This function adds the json object to the array shifts
  handleSubmit = (e) => {
    e.preventDefault();
//    this.props.addShift(this.state.shift);
  }

  //Handles the changes in the form, both selected day and discription
  handleChange = (e)  =>{
    let shiftCopy = this.state.shift;
    if (e.target.name=="day") {
      shiftCopy[e.target.name] = e.target.value.toUpperCase();
    }else{
      shiftCopy[e.target.name] = e.target.value;
    }
    this.setState({
      shift : shiftCopy

    })
    console.log(this.state.shift);
  }


  handleDayChange = (day) =>{
    console.log(day.getDay());
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
              Description:
              <input
                type="text"
                name="disc"
                value={this.state.shift.disc}
                onChange={this.handleChange}>
              </input>
              <input type="submit" value="submit" />

              <DayPickerInput onDayChange={this.handleDayChange} firstDayOfWeek={0  }/>

            </label>

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
