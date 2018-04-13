import React, { Component } from 'react';
import Title from './Title/Title'
import LogInArea from './LogInArea/LogInArea'

class Header extends Component {
  render() {
    return (
    <div id="header">
      <h2> Header </h2>
      <Title/>
      <LogInArea/>
    </div>
    );
  }
}

export default Header;
