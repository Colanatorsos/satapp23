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
                state.auth = true;
                state.email = action.payload;
                localStorage.setItem("user", JSON.stringify(state));
            } else {
                localStorage.removeItem("user");
                state.auth = false;
                state.email = action.payload;
            }
        },
    },
});

export const userReducer = userSlice.reducer;
export const userAction = userSlice.actions;
