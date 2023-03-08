import "./App.css";
import React from "react";
import FlexContainer from "./components/FlexContainer";

class App extends React.Component {
  state = {
    isVisible: true,
  };
  render() {
    return (
      <main className="container">
        <FlexContainer justContent = 'flex-start' alignItems= 'flex-start'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </FlexContainer>
      </main>
    );
  }
}

export default App;
