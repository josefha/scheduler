import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './Tools.css';

export default class AddShift extends Component {

  handleClick = () => {
    console.log("Clicking on close ")
    this.props.event();
  }

  render() {
    return (
    <div className='AddShift'>
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title> Title </Modal.Title>
        </Modal.Header>

        <Modal.Body> This is the body </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.handleClick}> Close </Button>
        </Modal.Footer>

      </Modal.Dialog>
    </div>
    );
  }
}
