import "./App.css";
import React, { useState } from "react";
import HomePage from "pages/HomePage";
import { ThemeContext } from "context";
import CONSTANTS from "constants.js";
import { Switch, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
import CounterPage from "pages/ClickerPage";
const { THEMES } = CONSTANTS;

function App() {
  const themeTuple = useState(THEMES.DARK);
  return (
    <ThemeContext.Provider value={themeTuple}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path = "/counter" exact component = {CounterPage} />
      </Switch>
    </ThemeContext.Provider>
  );
}

export default App;
