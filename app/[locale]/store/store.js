"use client";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cart from "./featuers/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "ecommrceApp",
  storage,
  version: 1,
  whitelist: ["cart", "totalPrice", "totalQuantity"],
};

const reducer = combineReducers({
  cart: cart,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
