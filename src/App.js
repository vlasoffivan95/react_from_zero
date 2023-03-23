import "./App.css";
import React from "react";
import Headers from "./components/Headers";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Footer from "./pages/Footer";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";


function App() {
  return (
    <>
      <Headers />

      <Switch>
        <Route
          path="/about"
          render={(routeProps) => <About {...routeProps}></About>}
        />

        <Route path="/contact" render={() => <Contacts />} />

        <Route path="/" exact component={Home} />
        <Route path="/users" component={UsersPage} />
        <Route path="/posts" component={PostsPage} />

        <Route path="*">{() => <NotFoundPage />}</Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
