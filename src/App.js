import "./App.css";
import React from "react";
import Timer from "components/HookTimer";
import Tree from "components/Tree";
import { ProductContext, ThemeContext } from "context";
import UsersLoader from "components/UsersLoaderHooks";

function App() {
  return (
    <>
      <ThemeContext.Provider value={"dark"}>
        <ProductContext.Provider value = {{id:10, name:'Prod1'}}>
        <Timer />
        <Tree />
        <UsersLoader />
        </ProductContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
