import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';
import '../CalenderPage.css';

export default class CalanderPage extends Component {
  render() {
    return (
      <div className="Tooldiv">
        <ButtonGroup>
          <Button>New Shift</Button>
          <Button>Redo</Button>
          <Button>Undo</Button>
          <DropdownButton title="Staff" id="bg-nested-dropdown">
            <MenuItem eventKey="1">Eric</MenuItem>
            <MenuItem eventKey="2">Joseph</MenuItem>
            <MenuItem eventKey="2">Alex</MenuItem>
          </DropdownButton>
        </ButtonGroup>
      </div>
    );
  }
}
