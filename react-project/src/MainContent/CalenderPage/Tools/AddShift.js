import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import DayPicker from 'react-day-picker';
import JoyRide from 'react-joyride';
import { bootstrapUtils } from 'react-bootstrap';
import 'react-day-picker/lib/style.css'
import './Tools.css';

export default class AddShift extends Component {

  constructor(){
    super();
    this.state = {
      runDemo: false,
      shift : {
      "title": "",
      "date": "",
      "day" : 0,
      "startTime" : 0,
      "endTime" : 0,
      "desc" : ""
    },
    arrayOfSteps1: [
      {
        target:'#title',
        content: 'Here you can write the title',
        disableBeacon: true,
        placement: 'top'

      },
      {
        target:'#description',
        content: 'Here can you write the description of the shift',
        placement: 'right'
      },
      {
        target: '#dayPickerDiv',
        content: 'Here you can pick the specific date'
      },
      {
        target: '#timepickerStart',
        content: 'Here you can pick the start time of the shift'
      },
      {
        target: '#timepickerEnd',
        content: 'Here you can choose when the shift should end'
      },
      {
          target: '#submitBtn',
          content: 'Press here to create the shift'
      }
    ]

  }
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
    if(id==='startTime'){
      obj[id] = parseInt(e,10)
    }else{
      obj[id] = parseInt(e,10);
    }
    this.setState({
      shift : obj
    })
  }

  handleDemo = () => {
    this.setState({
      runDemo: !this.state.runDemo,
    })
    console.log("demo in module");
  }


  render() {
    return (
    <div id="container-addShift">

        <Modal.Dialog bsSize="medium" id="modalDialog">

          <Modal.Header>
            <Modal.Title>
              <div id="title">
                  <label for="titleInput" id="labelTitle">
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
             </Modal.Title>

          </Modal.Header>
          <Modal.Body id="modal-body">
            <JoyRide
            steps={this.state.arrayOfSteps1}
            run={this.state.runDemo}
            debug={true}
            continuous={true}
            showProgress={true}
            spotlightClicks={true}
            />


            <form onSubmit={this.handleSubmit} id="form-grid">

              <div id="dayPickerDiv">
                <DayPicker
                  className="grid-item"
                  id='dayPicker'
                  selectedDays ={this.state.shift.date}
                  onDayClick={this.handleDayClick}
                  firstDayOfWeek={1}
                />
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
                <label for="descInput" id="labelDesc">
                  Description:
                </label>
                  <textarea
                    className = "grid-item"
                    id="descInput"
                    name="desc"
                    value={this.state.shift.desc}
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
            <Button bsStyle="primary customSubBtn" id="submitBtn" type="submit" bsSize="large"> Submit </Button>
          </div>
          </form>

        </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleDemo} id="helpBtn"> Help </Button>
            <Button onClick={this.handleClick} id="CloseBtn"> Close </Button>


          </Modal.Footer>

        </Modal.Dialog>

    </div>
    );
  }
}
