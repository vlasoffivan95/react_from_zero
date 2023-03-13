import "./App.css";
import React from "react";
import Headers from "./components/Headers";
import SignUpForm from "./components/SignUpForms";


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
          otherProp1={12345}
          user={{id: 1234444, name:'kekekek', src:'sfsdfsdf'}}
          logout={this.logout}
        />
        <SignUpForm/>
      </>
    );
  }
}

export default App;
