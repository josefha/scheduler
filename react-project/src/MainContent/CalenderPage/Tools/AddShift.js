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
      "title": "",
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
    this.props.addShift(this.state.shift);
    e.preventDefault();
    this.handleClick();
  }


  //Handles the changes in the text input for Description and title
  handleChange = (e)  =>{
    let shiftCopy = this.state.shift;
    shiftCopy[e.target.name] = e.target.value;
    this.setState({
      shift : shiftCopy

    })
    console.log(this.state.shift);
  }

  // Handles the calendar
  handleDayClick = (date) =>{
    let shiftCopy = this.state.shift;
    shiftCopy['date'] = date;
    shiftCopy['day'] = date.getDay();
    this.setState({
      shift: shiftCopy
    })

    console.log(this.state.shift);
  }

  // Handles the time changes in the time picker
  handleTime = (id) => (e) =>{
    let obj = this.state.shift;
    if(id=='startTime'){
      obj[id] = parseInt(e)
    }else{
      obj[id] = parseInt(e);
    }
    this.setState({
      shift : obj
    })
  }

  render() {
    return (
    <div id="container-addShift">
      <Modal.Dialog bsSize="large">
        <Modal.Header>
          <Modal.Title> Title </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-body">
          <form onSubmit={this.handleSubmit} id="form-grid">

              <DayPicker
                className="grid-item"
                id='dayPicker'
                selectedDays ={this.state.shift.date}
                onDayClick={this.handleDayClick}
                firstDayOfWeek={1}

              />

              <div id="title">
                <p className="grid-item" id="titlePara">Title:</p>
                <input
                  className="titleInput"
                  type="text"
                  name="title"
                  value={this.state.shift.title}
                  onChange={this.handleChange}>
                  </input>
              </div>

            <div id="startTime">
              <p className="grid-item" >Start Time</p>
              <TimePicker
                className='startPicker'
                name="startTime"
                value= {this.state.shift.startTime}
                format={24}
                start="00:00"
                end="23:59"
                step={15}
                onChange={this.handleTime('startTime')}
               />
            </div>

            <div id="description">
              <p className="grid-item" id="discPara">Description:</p>
              <input
                className= "grid-item"
                id="discInput"
                type="text"
                name="disc"
                value={this.state.shift.disc}
                onChange={this.handleChange}>
              </input>
           </div>

            <div id="endTime">
              <p className="grid-item">End Time</p>
                <TimePicker
                  className='endPicker'
                  name="endTime"
                  value= {this.state.shift.endTime}
                  format={24}
                  start="00:00"
                  end="23:59"
                  step={15}
                  onChange={this.handleTime('endTime')} />
              </div>
          <input type="submit" value="submit" className="grid-item" id="submitButton"/>

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
