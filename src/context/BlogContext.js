import React from "react";

// Creating Context Object
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
};

export default BlogContext;
