import React from "react";
import { ProductContext, ThemeContext, THEMES } from "../../../App";

const SomeArticle = (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, onClick]) => {
        const styles = {
          backgroundColor: theme === THEMES.LIGHT ? 'lightgray' : 'black'

        }
        return (
          <ProductContext.Consumer>
            {(contextValue) => (
              <article style = {styles}>
                <h5>Article</h5>
                <button onClick = {onClick}>Change Theme</button>
                <div>{JSON.stringify(contextValue)}</div>
              </article>
            )}
          </ProductContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default SomeArticle;
