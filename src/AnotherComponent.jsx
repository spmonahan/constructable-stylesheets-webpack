import React from "react";
import { useShadowStyles } from "./ShadowRoot";
import * as styles from './AnotherComponent.css' assert { type: 'css' };

export const AnotherComponent = () => {

    useShadowStyles(styles.default);

    return <div className={styles.another}>
        Another Component
    </div>;
};