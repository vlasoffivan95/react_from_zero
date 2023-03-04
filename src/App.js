import "./App.css";
import Timer from "./components/Timer";
import React from "react";

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main className="container">
        <button className="timerBtn"
          onClick={() =>
            this.setState({
              isVisible: !this.state.isVisible,
            })
          }
        >
          Toogle
        </button>
        {this.state.isVisible && <Timer/>}
      </main>
    );
  }
}

export default App;
