import React from "react";
import CONSTANTS from "../../../constants";
import { ProductContext, ThemeContext } from "../../../context";

const SomeArticle = (props) => {
  const { product, theme, onClick } = props;

  const styles = {
    backgroundColor: theme === CONSTANTS.THEMES.LIGHT ? "lightgray" : "black",
  };

  return (
    // <ThemeContext.Consumer>
    //   {([theme, onClick]) => (
    //     <SomeArticleWithProduct theme={theme} onClick={onClick} />
    //   )}
    // </ThemeContext.Consumer>

    <article style={styles}>
      <h5>Article</h5>
      <button onClick={onClick}>Change Theme</button>
      <div>{JSON.stringify(product)}</div>
    </article>
  );
};

// function SomeArticleWithProduct({ theme, onClick }) {
//   return (
//     <ProductContext.Consumer>
//       {(product) => {
//         const styles = {
//           backgroundColor:
//             theme === CONSTANTS.THEMES.LIGHT ? "lightgray" : "black",
//         };
//         return (
//           <article style={styles}>
//             <h5>Article</h5>
//             <button onClick={onClick}>Change Theme</button>
//             <div>{JSON.stringify(product)}</div>
//           </article>
//         );
//       }}
//     </ProductContext.Consumer>
//   );
// }

function withProduct(Component) {
  function NewComponent(props) {
    return (
      <ProductContext.Consumer>
        {(product) => <Component product={product} {...props} />}
      </ProductContext.Consumer>
    );
  }

  return NewComponent;
}

const withTheme = (Component) => (props) =>
  (
    <ThemeContext.Consumer>
      {([theme, onClick]) => <Component theme={theme} onClick={onClick} {...props} />}
    </ThemeContext.Consumer>
  );

// const SomeArticleWithProduct = withProduct(SomeArticle);
// const SomeArticleWithAll = withTheme(SomeArticleWithProduct)


const SomeArticleWithAll = withProduct(withTheme(SomeArticle))

export default SomeArticleWithAll;
