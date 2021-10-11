// Bruker @reduxjs/toolkit i stedet for redux til å sette opp store
// @reduxjs/toolkit erstatter ikke redux, det er kun et supplement
import { configureStore } from '@reduxjs/toolkit';

// Ordet slice er et nytt begrep
import charactersSlice from './redux-toolkit/characters.state';
export const store = configureStore({
  reducer: {
    [charactersSlice.name]: charactersSlice.reducer,
  },
});
