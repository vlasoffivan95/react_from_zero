import React, { Component } from "react";

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
      id: 0
    };
  }
  handleClick = () => {
    this.setState({
      isGreeting: !this.state.isGreeting,
      id: this.state.id+1
    });
  };
  render() {
    const { name, id } = this.props;
    const { isGreeting } = this.state;

    return (
      <>
        <p>
          {isGreeting ? "Hello" : "Bye"}, {name}, {id}
        </p>
        <button onClick={this.handleClick}>Change Mode</button>
      </>
    );
  }
}

export default Aloha;
