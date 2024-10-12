import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./groceryReducer";

const reducers = combineReducers({
  groceryReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
