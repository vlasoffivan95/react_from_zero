import React, {Component} from "react";

class Headers extends Component {
  render() {
    const { name, id } = this.props;
    return (
      <header>
        <h1>
          I am {name} my id {id}
        </h1>
      </header>
    );
  }
}

export default Headers;
