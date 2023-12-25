import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cartReducer } from "./slice/cartSlice";
import { favoriteReducer } from "./slice/favoriteSlice";
import { visibilityReducer } from "./slice/visibilitySlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    visible: visibilityReducer,
  },
});
setupListeners(store.dispatch);
