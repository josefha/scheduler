import React, { Component } from 'react';

import QuickInfo from "./QuickInfo/QuickInfo";
import { Button, ButtonGroup} from 'react-bootstrap';
import './SideTab.css';

class SideTab extends Component {

  staffClick = () => {
    this.props.event('staffPage')
  }

  calenderClick = () => {
    this.props.event('calenderPage')
  }

  render() {
    return (
      <div className='SideTab'>
        <div className='SideMenu'>
        <ButtonGroup vertical block>
          <Button onClick={this.calenderClick}>Calander</Button>
          <Button onClick={this.staffClick}>Employees</Button>
          <Button>Settings</Button>
        </ButtonGroup>
        </div>
        <QuickInfo/>
      </div>
    );
  }
}

export default SideTab;
