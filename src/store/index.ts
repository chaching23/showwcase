import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { username } from './slices/userSlice';

const rootReducer = combineReducers({
  username,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
