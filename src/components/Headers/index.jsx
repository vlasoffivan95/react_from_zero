import React, { Component } from "react";
import HeaderUserCard, { userProps } from "./HeaderUserCard";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";

class Headers extends Component {
  render() {
    const props = {
      ...userProps,
    };
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home </Link></li>
            <li><Link to='/about'>About </Link></li>
            <li><Link to='/contact'>Contacts </Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

Headers.propTypes = {
  headerProp1: PropTypes.bool,
  headerProp2: PropTypes.number,
  logout: PropTypes.func.isRequired,
  user: userProps,
};

export default Headers;
