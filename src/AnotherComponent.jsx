import React from "react";
import * as styles from './AnotherComponent.css' assert { type: 'css' };

// Adopt all sheets into the document
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles.default];

export const AnotherComponent = () => {
    return <div className={styles.another}>
        Another Component
    </div>;
};