import { clear } from "@testing-library/user-event/dist/clear";
import React, { Component } from "react";

class Timer extends Component {
  state = {
    number: 10,
  };

  decrementNumber = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1,
    });
  };
  componentDidMount() {
    console.log("kek");
    this.timerID = setInterval(this.decrementNumber, 1000);
  }

  componentDidUpdate() {
    const { number } = this.state;
    if (number === 0) {
      clearInterval(this.timerID);
    }
  }

  componentWillUnmount() {
    console.log("kek unmount");
    clearInterval(this.timerID)
  }
  render() {
    const { number } = this.state;
    // setInterval(this.decrementNumber, 1000);
    return (
      <div>
        <p>{number}</p>
      </div>
    );
  }
}

export default Timer;
