"use client";

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.length) {
        const productIndex = state.cart.findIndex(
          (item) => item.id == action.payload.id
        );
        if (productIndex >= 0) {
          state.cart[productIndex].cartQuantity += 1;
          state.totalQuantity += 1;
        } else {
          const tempProduct = { ...action.payload, cartQuantity: 1 };
          state.cart.push(tempProduct);
          state.totalQuantity += 1;
        }
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
        state.totalQuantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      const productIndex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (action.payload.cartQuantity != 1) {
        state.totalQuantity -= 1;
        state.cart[productIndex].cartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
