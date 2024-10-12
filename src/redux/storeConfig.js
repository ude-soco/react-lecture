import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./groceryReducer";

// * Combine all reducers
const reducers = combineReducers({
  groceryReducer,
});

// * Store
const store = configureStore({
  reducer: reducers,
});

export default store;
