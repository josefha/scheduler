import React, { Component } from 'react';
import Title from './Title/Title'
import LoginArea from './LogInArea/LoginArea'
import './Header.css'

class Header extends Component {
  render() {
    return (
    <div id="header">
      <Title/>
      <LoginArea/>
    </div>
    );
  }
}

export default Header;
