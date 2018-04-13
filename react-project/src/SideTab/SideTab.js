import React, { Component } from 'react';
import Staff from "./SideMenu/Staff/Staff";
import SearchBar from "./SideMenu/SearchBar/SearchBar";
import './SideTab.css';


class SideTab extends Component {
  render() {
<<<<<<< HEAD
    return (
      <div id="SideTab">
        SideTab
      </div>
    );
=======
    return ( <div className='SideTab'>
    <h2> SideTab </h2>
    <Staff/>
        <SearchBar/>
    </div>);
>>>>>>> 9ccb4a6020ea1a304d92ae758b86cef7299cf097
  }
}

export default SideTab;
