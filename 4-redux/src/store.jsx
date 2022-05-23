import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// Reducer where we will do all our actions.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
