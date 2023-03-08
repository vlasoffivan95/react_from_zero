import React from 'react';
import styles from './FlexContain.module.scss'

const FlexContain= (props) => {
    const {justifyContent, alignItems} = props;


    return (
        <div style={{justifyContent:justifyContent, alignItems:alignItems,fontSize:'50px', display:'flex'}}>
            {props.children}
            
        </div>
    );
}

export default FlexContain;
