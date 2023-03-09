import React from "react";

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

export default HeaderUserCard;
