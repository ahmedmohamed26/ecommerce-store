"use client";
import { configureStore } from "@reduxjs/toolkit";
import cart from "./featuers/cartSlice";

export const store = configureStore({
  reducer: { cart },
});
