import React, { Component } from "react";
import DisplayClicker from "../DisplayClicker";
import ClickerController from "../ClickerController";

class Clicker extends Component {
  state = {
    click_count: 0,
  };
  countClicker = () => {
    this.setState({
      click_count: this.state.click_count + 1,
    });
  };

  render() {
    let click_count = this.state.click_count;
    return (
      <div>
        <DisplayClicker click_counted = {click_count}/>
        <ClickerController click_func = {this.countClicker} />
        {/* <button onClick={this.countClicker}>Click</button> */}
      </div>
    );
  }
}

export default Clicker;
