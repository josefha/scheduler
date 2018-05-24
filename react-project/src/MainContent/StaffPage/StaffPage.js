import React, { Component } from 'react';
import { Table,tbody, } from 'react-bootstrap';
import './StaffPage.css';
import {staff,staffPage} from '../CalenderPage/Tools/strings.js'


class StaffPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      staffList: []
    }
  }


  getStrings(type){
    let data = staffPage
    return data[type];
  }

  getStaff(nr){
    let x = [];
    for (var i in staff[nr]){

      x.push(staff[nr][i]);
    }

    let updatedStaffList = this.state.staffList;
    updatedStaffList.push(x);

    return updatedStaffList;
  }

  componentDidMount(){
    let updatedStaffList;
    for(var i = 0; i < Object.keys(staff).length; i++){
      updatedStaffList = this.getStaff(i)
    }
    this.setState({
      staffList : updatedStaffList
    })

  }

  showStaff(){
    let staffTable = [];
    let staffList = this.state.staffList;
    for (var i = 0; i < staffList.length; i++) {
      let person = staffList[i];
      staffTable.push(
        <tr>
          <td>{i}</td>
          <td>{person[0]}</td>
          <td>{person[1]}</td>
          <td>{person[2]}</td>
        </tr>
      );
    }
    return (
      staffTable
    );
  }

  render() {
    return (
    <div className='StaffPage'>
      {this.getStrings("registedEmployees")}

      <div className = "listOfWorkers">

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>{this.getStrings("nr")}</th>
              <th>{this.getStrings("firstName")}</th>
              <th>{this.getStrings("lastName")}</th>
              <th>{this.getStrings("phoneNr")}</th>
            </tr>
          </thead>
        <tbody>
        {this.showStaff()}
        </tbody>
      </Table>
    </div>
  </div>
    );
  }
}

export default StaffPage;
