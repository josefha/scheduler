import React, { Component } from 'react';
import Title from './Title/Title'
import LogInArea from './LogInArea/LogInArea'
import './Header.css'

class Header extends Component {
  render() {
    return (
    <div id="header">
      <Title/>
      <LogInArea/>
    </div>
    );
  }
}

export default Header;
