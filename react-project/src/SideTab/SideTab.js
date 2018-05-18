import React, { Component } from 'react';

import QuickInfo from "./QuickInfo/QuickInfo";
import { Button, ButtonGroup} from 'react-bootstrap';
import './SideTab.css';

class SideTab extends Component {
  // Flytta funktionerna till LoginArea.js samt knapparna

  render() {
    return (
      <div className='SideTab'>
        <div className='SideMenu'>
        <ButtonGroup vertical block>
        </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default SideTab;
