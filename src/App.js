import "./App.css";
import React, { useState } from "react";
import HomePage from "pages/HomePage";
import { ThemeContext } from "context";
import CONSTANTS from "constants.js";
import RefClicker from "components/RefClicker";
import { Switch, Route } from "react-router-dom";
import LoginPage from "pages/LoginPage";
const { THEMES } = CONSTANTS;

function App() {
  const themeTuple = useState(THEMES.DARK);
  return (
    <ThemeContext.Provider value={themeTuple}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </Switch>
      <HomePage />
    </ThemeContext.Provider>
  );
}

export default App;
