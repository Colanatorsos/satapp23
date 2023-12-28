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
            state.posts = [...state.posts, action.payload];
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((el) => el.id === action.payload);
        },
        likePost: (state, action) => {
            state.posts = state.posts.map((el) => {
                if (el.id === action.payload.id) {
                    return { ...el, like: !el.like };
                }
                return el;
            });
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
