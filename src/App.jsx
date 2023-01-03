import React from "react";

import { ShadowRoot } from './ShadowRoot';
import { Component } from './Component';
import { AnotherComponent } from './AnotherComponent';

export const App = () => {

    const [anotherLoaded, setAnotherLoaded] = React.useState(false);

    const onBtnClick = () => {
        setAnotherLoaded(true);
    }

    return <>
        <ShadowRoot>
            <Component />
            {!anotherLoaded && <button onClick={onBtnClick}>Load Another Component</button>}
            {anotherLoaded && <AnotherComponent />}
        </ShadowRoot>
        <ShadowRoot>
            <Component />
        </ShadowRoot>
    </>
};