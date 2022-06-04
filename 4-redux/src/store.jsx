import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";

// This is our whole state. A container for our whole state.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
