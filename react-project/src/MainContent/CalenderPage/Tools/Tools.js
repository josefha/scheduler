import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import AddShift from './AddShift'
import '../CalenderPage.css';
import './Tools.css';

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


  render() {
    return (
      <div className="Tooldiv">
        <ButtonGroup>
          <Button onClick={this.togglePopUp}>New Shift</Button>
          <Button>Redo</Button>
          <Button>Undo</Button>
          <DropdownButton title="Staff" id="bg-nested-dropdown">
            <MenuItem eventKey="1">Eric</MenuItem>
            <MenuItem eventKey="2">Joseph</MenuItem>
            <MenuItem eventKey="2">Alex</MenuItem>
          </DropdownButton>
        </ButtonGroup>

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
