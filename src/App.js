import "./App.css";
import React from "react";
import Headers from "./components/Headers";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <Headers />

      <Switch>
        <Route path="/about" render={(routeProps) => <About {...routeProps}></About> } />

        <Route path="/contact" render={() => <Contacts />} />

        <Route path="/" exact component={Home} />

        <Route path="*">{() => <NotFoundPage />}</Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
