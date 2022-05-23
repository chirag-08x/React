import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems.js";

// initial state for our app.
const initialState = {
  cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
});

console.log(initialState);

export default cartSlice.reducer;
