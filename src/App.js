import "./App.css";
import React from "react";
import FlexContainer from "./components/FlexContainer";
import FlexContain from "./components/FlexContain";

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main className="container">
        <FlexContain justifyContent = 'center' alignItems= 'flex-end'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </FlexContain>
      </main>
    );
  }
}

export default App;
