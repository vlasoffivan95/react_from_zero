import React, { useEffect, useState } from "react";
import { useData, useClicker } from "hooks";
import * as API from "api";

const UsersLoader = (props) => {
  const { data: users, isLoading, error } = useData(API.getOtherUsers);
  const clicks = useClicker();
  const userList = users.map((user) => (
    <article key={user.id}>
      <h2>Name: {user.name}</h2>
      <p>
        Email: <a href={`mailto: ${user.email}`}> {user.email}</a>
      </p>
    </article>
  ));

  return (
    <div>
      <h2>Clicks: {clicks}</h2>
      {isLoading && <div>Loading....</div>}
      {error && <div>Error</div>}
      {users.length > 0 && userList}
    </div>
  );
};

export default UsersLoader;
