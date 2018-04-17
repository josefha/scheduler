import React, { Component } from 'react';
import { Table,tbody, } from 'react-bootstrap';
import './StaffPage.css';


class StaffPage extends Component {
  constructor(props){
    super(props);
    this.state = {staffList: [["alex","Wahlandt","+46707502466"],["Josef","Karakoca","+46707240529"]]}
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
      All registed employees

      <div className = "listOfWorkers">

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phonenumber</th>
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
