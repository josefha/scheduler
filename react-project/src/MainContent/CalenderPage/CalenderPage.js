import React, { Component } from 'react';
import Tools from './Tools/Tools';
import CalenderArea from './CalenderArea/CalenderArea';

class CalenderPage extends Component {
  render() {
    return (
      <div>
      <Tools/>
      <CalenderArea/>
    </div>
    );
  }
}


export default CalenderPage;
