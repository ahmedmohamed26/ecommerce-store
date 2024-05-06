"use client";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );

      if (productIndex >= 0) {
        state.cart[productIndex].cartQuantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += JSON.parse(action.payload.price);

        toast.success(
          `increased ${state.cart[productIndex].title} cart quantity`
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
        state.totalQuantity += 1;
        state.totalPrice += JSON.parse(action.payload.price);
        toast.success(`increased ${tempProduct.title} cart quantity`);
      }
    },
    removeFromCart: (state, action) => {
      const productIndex = state.cart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (action.payload.cartQuantity != 1) {
        state.totalQuantity -= 1;
        state.cart[productIndex].cartQuantity -= 1;
        state.totalPrice -= JSON.parse(action.payload.price);
        toast.success(
          `decrease ${state.cart[productIndex].title} cart quantity`
        );
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        state.totalQuantity -= 1;
        state.totalPrice -= JSON.parse(action.payload.price);
        toast.success(`decrease ${action.payload.title} cart quantity`);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
