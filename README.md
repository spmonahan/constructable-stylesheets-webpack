# Constructable Stylesheets with Webpack

This repo is an experiment to see if Webpack loaders can be used with CSS modules to produce constructable stylesheets for use with custom element (i.e., shadow DOM).

## Usage

0. `yarn`: install deps
1. `yarn webpack`: build the app
2. `yarn serve`: server the app

## Background

Essentially the goal is to be able to the following (pseudo code ahead!):

```jsx
// A React component
import * as styles from './styles.css' assert { type: 'css' };
document.adoptedStyleSheets = [...document.adoptedStylesheets, styles.default];

const MyReactComponent = () => {
    return <div className={styles.myCssModuleClassName}>React component with CSS modules</div>
};

// Using react-shadow (https://www.npmjs.com/package/react-shadow)
return <root.div styleSheets={document.adoptedStylesSheets}>
    <MyReactComponent />
</root.div>;
```