import React, { Component } from "react";

class DisplayClicker extends Component {
  render() {
    return <p>Click_count : {this.props.click_counted}</p>;
  }
}

export default DisplayClicker;
