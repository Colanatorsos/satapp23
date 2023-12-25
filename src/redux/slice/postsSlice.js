import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            console.log(action.payload);
            state.posts = [...state.posts, action.payload];
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((el) => el.id === action.payload);
        },
        changePost: (state, action) => {
            state.posts = state.posts.map((el) => {
                if (el.id === action.payload.id) {
                    return action.payload;
                }
                return el;
            });
        },
    },
});

export const postsReducer = postsSlice.reducer;
export const postsAction = postsSlice.actions;
