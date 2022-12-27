import "./App.css";

import Greeting from "./components/Greeting";
import Aloha from "./components/Aloha";
import React from "react";

const user = {
  id: 222,
  name: "User",
  role: "user",
};

const admin = {
  id: 11,
  name: "Admin",
  role: "admin",
};

// function App() {
//   return (
//     <>
//       {/* {user.role === "admin" && <Greeting name={user.name} />}
//       {admin.role === "admin" && <Greeting name={"admin"} />}
//       <input disabled = {admin.role === 'admin'}></input> */}
//       <Aloha name={user.name} />
//       <Aloha name={admin.name} />
//     </>
//   );
// }

class App extends React.Component {
  state = {
    user: user,
  };

  changeName = () => {
    const newName = prompt("Enter new name ");
    const newUser = {
      ...this.state.user,
      name: newName,
    };
    this.setState({
      user: newUser,
    });
  };
  render() {
    return (
      <>
        <Aloha name={this.state.user.name} />
        <button onClick={this.changeName}>Change Name</button>
      </>
    );
  }
}

export default App;
