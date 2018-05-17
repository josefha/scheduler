import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
import Title from './Title/Title'
import LogInArea from './LogInArea/LoginArea'
//import './Header.css'

class Header extends Component {


  staffClick = () => {
    this.props.event('staffPage')
  }

  calenderClick = () => {
    this.props.event('calenderPage')
  }


  render() {
    return (

      <Navbar id="navBartest">
        <Navbar.Header>
          <Navbar.Brand>
            Scheduling System
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={this.calenderClick}>
             Calander
            </NavItem>

            <NavItem eventKey={2} onClick={this.staffClick}>
             Employees
            </NavItem>

            <NavItem eventKey={3}>
              Profile
            </NavItem>

            <NavItem eventKey={4}>
              Settings
            </NavItem>

          </Nav>
      </Navbar>



    /*
    <div id="header">
      <Title />
      <LogInArea event={this.props.event}/>
    </div>
    */
    );
  }
}

export default Header;
