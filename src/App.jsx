import React from "react";
import root from 'react-shadow';

import { Component } from './Component';
import { AnotherComponent } from './AnotherComponent';

export const App = () => {

    const ref = React.useRef();

    React.useEffect(() => {
        console.log(ref.current.shadowRoot.adoptedStyleSheets[0]);
    }, []);

    const [anotherLoaded, setAnotherLoaded] = React.useState(false);

    const onBtnClick = () => {
        setAnotherLoaded(true);
    }

    // See "propTypes": https://www.npmjs.com/package/react-shadow
    // Adopt the document's adoptedStyleSheets into the shadow root.
    return <root.div 
        ref={ref}
        styleSheets={document.adoptedStyleSheets}>
            <Component />
            {!anotherLoaded && <button onClick={onBtnClick}>Load Another Component</button>}
            {anotherLoaded && <AnotherComponent />}
    </root.div>;
};