import "./App.css";
import React from "react";
import Headers from "./components/Headers";
import SignUpForm from "./components/SignUpForms";
import { Switch, Route, Link } from "react-router-dom/cjs/react-router-dom.min";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,

      user: {
        id: 123456,
        name: "User",
        src: "sdfsdfsdf.jpg",
      },
    };
    this.intervalId = null;
  }

  logout = () => {
    this.setState({
      user: null,
    });
    alert("Exit");
  };

  render() {
    const { user } = this.state;
    const userProps = { user, logout: this.logout };
    return (
      <>
        <Headers
          headerProp1={true}
          otherProp1={12345}
          user={{ id: 1234444, name: "kekekek", src: "sfsdfsdf" }}
          logout={this.logout}
        />
        {/* <SignUpForm/> */}

        <Switch>
          <Route path="/about" component={About} />

          <Route path="/contact" render={() => <Contacts />} />

          <Route path="/" exact component={Home} />

          <Route path="*">{() => <NotFoundPage />}</Route>
        </Switch>

        <Footer />
      </>
    );
  }
}

function NotFoundPage() {
  return (
    <main>
      <h2>Not found page</h2>
    </main>
  );
}

function About() {
  return (
    <main>
      <h1>About page</h1>
    </main>
  );
}

function Home() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

function Contacts() {
  return (
    <main>
      <h1>Contacts 380955799657</h1>
    </main>
  );
}

function Footer() {
  return <footer>This is footer</footer>;
}

export default App;
