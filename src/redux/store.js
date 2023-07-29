import { configureStore } from '@reduxjs/toolkit';
import builderReducer from './features/builderSlice';

const store = configureStore({
  reducer: { builder: builderReducer },
});

export default store;
