import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {header} from '../MainContent/CalenderPage/Tools/strings.js'

//import './Header.css'

class Header extends Component {


  staffClick = () => {
    this.props.event('staffPage')
  }

  calenderClick = () => {
    this.props.event('calenderPage')
  }

  getStrings(type){
    let data = header;
    return data[type];
  }

  render() {
    return (
      <Navbar id="navBartest" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            {this.getStrings("companyName")}
          </Navbar.Brand>
        <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} onClick={this.calenderClick}>
               {this.getStrings("calender")} 
              </NavItem>

              <NavItem eventKey={2} onClick={this.staffClick}>
               {this.getStrings("employees")}
              </NavItem>

              <NavItem eventKey={3}>
                {this.getStrings("profile")}
              </NavItem>

              <NavItem eventKey={4}>
                {this.getStrings("settings")}
              </NavItem>

            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
