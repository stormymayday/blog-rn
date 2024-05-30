import React, { useState } from "react";

// Creating Context Object
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    // Helper Function
    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts,
            { title: `Blog Post #${blogPosts.length + 1}` },
        ]);
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
