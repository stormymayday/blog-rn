// Importing the createDataContext function
import createDataContext from "./createDataContext";

// Reducer Function
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, { title: `Blog Post ${state.length + 1}` }];
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

// Calling createDataContext
export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost },
    []
);
