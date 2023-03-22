import React, { Component } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Headers extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/about">About </Link>
            </li>
            <li>
              <Link to="/contact">Contacts </Link>
            </li>
            <li>
              <Link to="/users"> Users</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Headers;
