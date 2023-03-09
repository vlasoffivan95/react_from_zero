import React, { Component } from "react";
import HeaderUserCard from "./HeaderUserCard";

class Headers extends Component {
  render() {
    const { headerProp1, headerProp2, ...userProps } = this.props;
    const props = {
      ...userProps,
    };
    return (
      <header>
        <h1>MySite</h1>
        <HeaderUserCard {...userProps} />
      </header>
    );
  }
}

export default Headers;
