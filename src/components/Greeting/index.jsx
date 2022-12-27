import React from "react";
function Greeting(props) {
  const { name } = props;
  // return <p>Hello, {name ? name : "guest"}!</p>;
  // return <p> Hello, {name||'guest'}</p>
  // if (name) {
  //   return <GreetUser name ={name}/>
  // }
  // return <GreetGuest/>
  return name ? <GreetUser name={name} /> : <GreetGuest />;
}

function GreetGuest(props) {
  return <p> Hello, {"guest"}, pls , register!</p>;
}

function GreetUser(props) {
  return <p> Hello, {props.name}</p>;
}

export default Greeting;
