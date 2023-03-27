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
import Tree from "./components/Tree";

export const ProductContext = React.createContext();
export const ThemeContext = React.createContext();

class App extends React.Component {
  state = {
    product: {
      id: 5,
      name: "mobila",
      price: 1000,
    },

    theme: "light",
  };
  render() {
    const { product, theme } = this.state;

    return (
      <ProductContext.Provider value={product}>
        <ThemeContext.Provider value = {theme}>
        <Headers />

        <Tree />

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
        </ThemeContext.Provider>
      </ProductContext.Provider>
    );
  }
}
export default App;
