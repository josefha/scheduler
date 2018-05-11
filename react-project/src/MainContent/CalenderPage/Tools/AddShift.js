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
          <Modal.Title>Add a new shift </Modal.Title>
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
                <label for="titleInput" className="labelLeft">
                  Title:
                </label>
                  <input
                    id="titleInput"
                    type="text"
                    name="title"
                    value={this.state.shift.title}
                    onChange={this.handleChange}>
                    </input>

              </div>

            <div id="startTime">
              <label for="startPicker" className="labelAbove">
                Start time:
              </label>
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
              <label for="discInput" className="labelLeft" id="labelDesc">
                Description:
              </label>
                <textarea
                  className = "grid-item"
                  id="discInput"
                  name="disc"
                  value={this.state.shift.disc}
                  onChange={this.handleChange}
                />

           </div>

            <div id="endTime">
              <label for="endPicker" className="labelAbove">
                End time:
              </label>
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

        <div id="submitDiv">
          <input type="submit" value="submit" className="grid-item" id="submitButton"/>
        </div>
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
