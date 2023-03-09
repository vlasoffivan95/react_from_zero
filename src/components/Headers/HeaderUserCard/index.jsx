import React from "react";
import PropTypes from 'prop-types'
import { userProps } from "..";

const HeaderUserCard = (props) => {
  const { user, logout } = props;

  return (
    <div>
      {" "}
      {user && <img alt={user.name} src={user.src} />}
      <button
        style={{
          padding: "20px",
          backgroundColor: "blue",
          border: "2px solid black",
        }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};



HeaderUserCard.propTypes = {
logout: PropTypes.func.isRequired,
user: userProps
}

export default HeaderUserCard;
