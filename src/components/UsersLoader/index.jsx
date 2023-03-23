import React, { Component } from "react";
import { getUsers } from "../../api";

class UsersLoader extends Component {
  state = {
    users: [],
    isLoading: false,
    error: null,
    currentPage: 1,
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  mapUsers = (user) => (
    <div key={user.login.uuid}>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );

  load = () => {
    const { currentPage } = this.state;
    this.setState({ isLoading: true });

    getUsers({page: currentPage, results:10 })
      .then((users) => {
        this.setState({
          users: users,
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    const { users, isLoading, error } = this.state;
    const usersList = users.map(this.mapUsers);
    if (isLoading) {
      return <div>Loading....</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <button onClick={this.nextPage}>Next Page</button>
        {usersList}
      </div>
    );
  }
}

export default UsersLoader;
