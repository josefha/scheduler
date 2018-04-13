import React, { Component } from 'react';
import Staff from "./SideMenu/Staff/Staff";
import SearchBar from "./SideMenu/SearchBar/SearchBar";
import QuickInfo from "./QuickInfo/QuickInfo";
import './SideTab.css';


class SideTab extends Component {
  render() {
    return (
      <div className='SideTab'>
        <div id='SideMenu'>
          <SearchBar/>
          <Staff/>
        </div>
        <QuickInfo/>
      </div>
    );
  }
}

export default SideTab;
