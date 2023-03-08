import React from "react";
import cx from "classnames";
import styles from "./FlexContainer.module.scss";

const FlexContainer = (props) => {
  const {
    justContent = "flex-start",
    alignItems = "stretch",
    children,
  } = props;

  //   const styles = {
  //     display:'flex',
  //     justifyContent: justContent,
  //     alignItems: alignItems,
  //     width: '1000px',
  //     height:'1000px'

  //   }

  // const classes = `flex jc-${justContent} ai-${alignItems}`
  const isJCCenter = justContent === "center";
  const classes = cx(styles.container, { [styles.jcCenter]: isJCCenter, [styles.jcFlexstart] : justContent === 'flex-start' });

  return <div className={classes}>{children}</div>;
};

export default FlexContainer;
