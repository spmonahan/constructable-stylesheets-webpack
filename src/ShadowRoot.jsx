import * as React from "react";
import root from "react-shadow";

// A React context for adding Constructable stylesheets to appropriate shadow roots
export const ShadowContext = React.createContext(null);

export const useShadowContext = () => {
    return React.useContext(ShadowContext);
};

// Helper hook for adding sheets to context
export const useShadowStyles = (styles) => {
    const context = useShadowContext();
    React.useEffect(() => {
        context.addSheet(styles);
        return () => context.removeSheet(styles);
    }, []);
};

// Component for providing and managing context
export const ShadowRoot = (props) => {

    // Use React state to force re-render when stylesheets change
    const [ stylesheets, setStylesheets ] = React.useState([]);

    const value = React.useMemo(() => {
        // Set makes it simple to add/remove sheets
        const sheets = new Set();
        return {
            addSheet(sheet) {
                sheets.add(sheet);
                setStylesheets([...sheets]); // Possibly not the most efficient way to do this
            },
            removeSheet(sheet) {
                sheets.delete(sheet);
                setStylesheets([...sheets]);
            }
        }
    }, []);

    // Provide the context and render into a shadow root
    return (
        <ShadowContext.Provider value={value}>
           <root.div styleSheets={stylesheets} {...props} />
        </ShadowContext.Provider>);

};