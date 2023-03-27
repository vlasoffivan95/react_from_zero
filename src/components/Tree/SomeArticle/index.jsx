import React from "react";
import { ProductContext, ThemeContext } from "../../../App";

const SomeArticle = (props) => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {
        const styles = {
          backgroundColor: theme === 'light' ? 'lightgray' : 'darkgrey'

        }
        return (
          <ProductContext.Consumer>
            {(contextValue) => (
              <article style = {styles}>
                <h5>Article</h5>
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
