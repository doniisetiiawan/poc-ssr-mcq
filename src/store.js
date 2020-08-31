import { configureStore } from '@reduxjs/toolkit';
import person from './reducers/person';

export default (initialState) => configureStore({
  reducer: {
    person,
  },
  preloadedState: initialState,
});
