import React, { useReducer } from "react";

// Creating Context Object
const BlogContext = React.createContext();

// Reducer Function
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog Post ${state.length + 1}` }];
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    // Helper Function
    const addBlogPost = () => {
        dispatch({ type: "add_blogpost" });
    };

    return (
        <BlogContext.Provider
            value={{ data: blogPosts, addBlogPost: addBlogPost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
