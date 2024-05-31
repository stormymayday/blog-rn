import React, { useReducer } from "react";

// Creates and exports Context and Provider
export default (reducer, actions, initialState) => {
    // 1. Creating Context object
    const Context = React.createContext();

    // 2. Creating Provider function
    const Provider = ({ children }) => {
        // Calling useReducer
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === {addBlogPost: (dispatch) => return () => {...}}}
        // Binding actions
        const boundActions = {};
        // Looping through the actions object
        for (let key in actions) {
            // key === 'addBlogPost'
            // For every key (Ex: addBlogPost), we are going to take the function (dispatch) => return () => {...}}
            // We are going to call it with the 'dispatch' argument
            boundActions[key] = actions[key](dispatch);
            // Which will give us the function return () => {...}
            // Setting it on the boundActions object
        }

        return (
            <Context.Provider value={{ state: state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };

    // returning the Context (object) and the Provider (function)
    return { Context, Provider };
};
