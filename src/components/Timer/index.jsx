import React, { Component } from "react";

class Timer extends Component {
  state = {
    number: 10,
    isDoubled: true,
  };

  decrementNumber = () => {
    const { number, isDoubled } = this.state;
    this.setState((state) => ({
      number: state.number - 1,
    }));
    if (isDoubled) {
      console.log("double");
      this.setState((updatedState) => {
        const newState = {
          number: updatedState.number - 1,
        };
        return newState;
      });
    }
  };
  componentDidMount() {
    console.log("kek mount");
    this.timerID = setInterval(this.decrementNumber, 1000)
  }

  componentDidUpdate() {
    console.log("did update");
    const { number } = this.state;
  }

  componentWillUnmount() {
    console.log("kek unmount");
    clearInterval(this.timerID);
  }
  render() {
    const { number } = this.state;
    const styles = {color: "red", fontSize: '20px', fontWeight:'bold'};
    return (
      <div style = {styles}>
        <p>{number}</p>
        <button onClick={this.decrementNumber}>Decrement</button>
      </div>
    );
  }
}

export default Timer;
