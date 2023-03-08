import React from "react";
import styles from './FlexContainer.scss'

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

const classes = `flex jc-${justContent} ai-${alignItems}`
  return <div className={classes}>{children}</div>;
};

export default FlexContainer;
