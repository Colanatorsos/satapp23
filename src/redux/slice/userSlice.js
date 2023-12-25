import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        auth: false,
        email: null,
    },
    reducers: {
        setAuth: (state, action) => {
            if (action.payload) {
                localStorage.setItem("auth", true);
                state.auth = true;
                state.email = action.payload;
            } else {
                localStorage.removeItem("auth");
                state.auth = false;
                state.email = action.payload;
            }
        },
    },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
