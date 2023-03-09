import "./App.css";
import React from "react";
import Headers from "./components/Headers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,

      user: {
        id: 123456,
        name: "User",
        src: "sdfsdfsdf.jpg",
      },
    };
    this.intervalId = null;
  }

  logout = () => {
    this.setState({
      user: null,
    });
    alert("Exit");
  };

  render() {
    const { user } = this.state;
    const userProps = { user, logout: this.logout };
    return (
      <>
        <Headers
          headerProp1={true}
          headerProp2={"kek"}
          otherProp1={12345}
          user={user}
          logout={this.logout}
        />
      </>
    );
  }
}

export default App;
