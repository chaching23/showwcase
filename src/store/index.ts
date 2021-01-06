import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { username } from "./slices/userSlice";
import { schools } from "./slices/schoolSlice";

const rootReducer = combineReducers({
  username,
  schools,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
