import React, { Component } from "react";
import styles from "./Timer.module.scss"

class Timers extends Component {
  state = {
    number: 10,
    isDoubled: false,
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
  }

  componentWillUnmount() {
    console.log("kek unmount");
    clearInterval(this.timerID);
  }
  render() {
    const { number } = this.state;
    const parStyles = {color: number > 0 ? "green": "red", fontSize: '20px', fontWeight:'bold'};
    return (
      <div>
        <p style = {parStyles}>{number}</p>
        <button className= {styles.btn} onClick={this.decrementNumber}>Decrement</button>
      </div>
    );
  }
}

export default Timers;
