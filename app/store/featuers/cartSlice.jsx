"use client";

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cart =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const totalPrice =
  localStorage.getItem("totalPrice") !== null
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0;
const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const initialState = {
  cart: cart,
  totalPrice: totalPrice,
  totalQuantity: totalQuantity,
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
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
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

      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      localStorage.setItem(
        "totalQuantity",
        JSON.stringify(state.totalQuantity)
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
