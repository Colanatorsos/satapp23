import { createSlice } from '@reduxjs/toolkit';

const visibilitySlice = createSlice({
  name: 'visibility',
  initialState: {
    isVisible: true,
  },
  reducers: {
    open: (state) => {
      state.isVisible = false
    },
    close: (state) => {
      state.isVisible = true
    },
  },
});

export const visibilityReducer = visibilitySlice.reducer
export const visibilityActions = visibilitySlice.actions