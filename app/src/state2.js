import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './redux-toolkit/characters.state';
console.log('charactersReducer', charactersReducer)
export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
