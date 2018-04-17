import React, { Component } from 'react';
import SearchBar from "./SideMenu/SearchBar";
import QuickInfo from "./QuickInfo/QuickInfo";
import { Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';

import './SideTab.css';



class SideTab extends Component {
  render() {
    return (
      <div className='SideTab'>
        <div className='SideMenu'>
        <ButtonGroup vertical block>
          <Button>Calander</Button>
          <Button>Staff</Button>
          <Button>Settings</Button>
        </ButtonGroup>
        </div>
        <QuickInfo/>
      </div>
    );
  }
}

export default SideTab;
