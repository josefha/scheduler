import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
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
      <Navbar id="navBartest" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Scheduling System
          </Navbar.Brand>
        <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
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
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
