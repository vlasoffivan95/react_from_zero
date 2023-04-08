import React, { useContext } from "react";
import CONSTANTS from "constants";
import { withTheme, withProduct } from "hocs";
import { ThemeContext, ProductContext } from "context";

const { THEMES } = CONSTANTS;

const SomeArticle = (props) => {
  const { theme, onClick } = props;
  const product = useContext(ProductContext);

  const styles = {
    backgroundColor: theme === CONSTANTS.THEMES.LIGHT ? "lightgray" : "black",
  };

  return (
    <article style={styles}>
      <h5>Article</h5>
      <button onClick={onClick}>Change Theme</button>
      <div>{JSON.stringify(product)}</div>
    </article>
  );
};

export default SomeArticle;
