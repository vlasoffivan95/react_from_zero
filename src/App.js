import "./App.css";
import Timer from "./components/Timer";
import React from "react";
import List from "./components/List";

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main className="container">
        <List>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>

        </List>
      </main>
    );
  }
}

export default App;
