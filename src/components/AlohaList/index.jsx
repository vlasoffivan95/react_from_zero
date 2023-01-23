import React, { Component } from "react";
import Aloha from "../Aloha";
import FavoriteAlohas from "../FavoriteAlohas";

class AlohaList extends Component {
  state = {
    users: [
      { id: 1, name: "user1", isFavorite: false },
      { id: 2, name: "user2", isFavorite: false },
      { id: 3, name: "user3", isFavorite: false },
      { id: 4, name: "user4", isFavorite: false },
      { id: 5, name: "user5", isFavorite: false },
      { id: 6, name: "user6", isFavorite: false },
    ],
  };
  sortUsers = () => {
    const { users } = this.state;
    const copyArray = structuredClone(users);
    copyArray.reverse();
    this.setState({
      users: copyArray,
    });
  };

  makeFavorite = (userId) => {
    const newUsers = this.state.users.map((user) => {
      const newUser = {
        ...user,
        isFavorite: userId === user.id ? true : user.isFavorite,
      };
      return newUser;
    });
    this.setState({
      users: newUsers,
    });
  };

  render() {
    const { users } = this.state;
    const alohas = users.map((user) => (
      <li key={user.id}>
        <Aloha
          id={user.id}
          name={user.name}
          makeFavorite={this.makeFavorite}
        />
      </li>
    ));
    const favoriteUsers = users.filter((user) => user.isFavorite);

    return (
      <div>
        <h1>Aloha list : </h1>
        <button onClick={this.sortUsers}>Change order</button>
        <section>
          <h2>
            Favorite users
            <FavoriteAlohas favoriteUsers={favoriteUsers}/>
          </h2>
        </section>
        <ul>{alohas}</ul>
      </div>
    );
  }
}

export default AlohaList;
