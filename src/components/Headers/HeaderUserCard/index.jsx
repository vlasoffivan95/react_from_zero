import React from "react";
import PropTypes from 'prop-types'

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

export const userProps = PropTypes.shape({
id: PropTypes.number.isRequired,
name: PropTypes.string.isRequired,
src: PropTypes.string.isRequired,
})

HeaderUserCard.propTypes = {
logout: PropTypes.func.isRequired,
user: userProps,
}

HeaderUserCard.defaultProps = {
  user : {
    id:12345,
    name: "TESTING",
    src: 'https:/kalkalich.com'
  },
  logout: () => alert('Hello world')
}

export default HeaderUserCard;
