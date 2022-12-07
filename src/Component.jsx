import React from "react";
import * as styles from './Component.css' assert { type: 'css' };

// Adopt all sheets into the document
document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles.default];

export const Component = () => {
    return <div className={styles.test}>
        Hello World
    </div>;
};