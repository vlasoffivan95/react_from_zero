import React, { Component } from "react";
import HeaderUserCard from "./HeaderUserCard";
import PropTypes from 'prop-types'

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


Headers.propTypes = {
  headerProp1: PropTypes.bool,
  headerProp2: PropTypes.number,
  logout:PropTypes.func.isRequired
}

export const userProps = PropTypes.exact( {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
})

export default Headers;
