import React from "react";
import { useShadowStyles } from "./ShadowRoot";
import * as styles from './Component.css' assert { type: 'css' };

export const Component = () => {
    
    useShadowStyles(styles.default);

    return <div className={styles.test}>
        Hello World
    </div>;
};