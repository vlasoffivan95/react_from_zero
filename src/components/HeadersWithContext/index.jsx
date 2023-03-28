import React from 'react';
import CONSTANTS from '../../constants';
// import {SrcContext} from ''
import { SrcContext } from '../../context';

const HeadersWithContext= () => {
    return (
        <div>
            <SrcContext.Consumer>
            {(contextValue) => (
                <div>{contextValue}</div>
            )}
            </SrcContext.Consumer>
        </div>
    );
}

export default HeadersWithContext;
