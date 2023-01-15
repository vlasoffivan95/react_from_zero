import React, { Component } from "react";

class Timer extends Component {
  state = {
    number: 10,
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <p>{number}</p>
      </div>
    );
  }
}

export default Timer;
