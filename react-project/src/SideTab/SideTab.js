import React, { Component } from 'react';
import Staff from "./SideMenu/Staff/Staff";
import SearchBar from "./SideMenu/SearchBar/SearchBar";
import './SideTab.css';


class SideTab extends Component {
  render() {
    return (
      <div className='SideTab'>
        <h2> SideTab </h2>
        <Staff/>
        <SearchBar/>
    </div>);
  }
}

export default SideTab;
