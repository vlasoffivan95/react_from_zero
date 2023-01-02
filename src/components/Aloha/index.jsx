import React, { Component } from "react";

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
      id: 0
    };
  }
  // handleClick = () => {
  //   this.setState({
  //     isGreeting: !this.state.isGreeting,
  //     id: this.state.id+1
  //   });
  // };
 
  render() {
    const { name, sortUsers, makeFavorite, id } = this.props;
    const { isGreeting } = this.state;

    return (
      <div>
        <p>
          {isGreeting ? "Hello" : "Bye"}, {name}
        </p>
        <button id ="btn" onClick={sortUsers}>Change Mode</button>
        <button onClick={()=> makeFavorite(id)}>Toogle favorite</button>
      </div>
    );
  }
}

export default Aloha;
