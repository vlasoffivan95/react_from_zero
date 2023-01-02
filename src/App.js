import "./App.css";

import Greeting from "./components/Greeting";
import Aloha from "./components/Aloha";
import React from "react";
import AlohaList from "./components/AlohaList";

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
  render() {
    return <AlohaList />;
  }
}

export default App;
