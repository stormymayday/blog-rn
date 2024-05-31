// Importing the createDataContext function
import createDataContext from "./createDataContext";

// Reducer Function
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post ${state.length + 1}`,
                },
            ];
        case "delete_blogpost":
            return state.filter((blogPost) => {
                return blogPost.id !== action.payload;
            });
        default:
            return state;
    }
};

// Helper Functions (dispatching action)
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: "add_blogpost" });
    };
};
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete_blogpost", payload: id });
    };
};

// Calling createDataContext
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);
