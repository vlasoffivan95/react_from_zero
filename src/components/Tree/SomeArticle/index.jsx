import React from "react";
import CONSTANTS from "../../../constants";
import { withTheme, withProduct } from "../../../hocs";

const SomeArticle = (props) => {
  const { product, theme, onClick } = props;

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

// const SomeArticleWithProduct = withProduct(SomeArticle);
// const SomeArticleWithAll = withTheme(SomeArticleWithProduct)

const SomeArticleWithAll = withProduct(withTheme(SomeArticle));

export default SomeArticleWithAll;
