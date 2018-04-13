import React, { Component } from 'react';
import '../Header.js'

export default class Title extends Component {
  render() {
    return (
    <div id="Title">
        <img id = "logo" src={ require('../../Images/logowhale-small.png')} />
    </div>
    );
  }
}
