import { configureStore } from '@reduxjs/toolkit';

import charactersSlice from './redux-toolkit/characters.state';
export const store = configureStore({
  reducer: {
    [charactersSlice.name]: charactersSlice.reducer,
  },
});
