// Må bruke configureStore fra @reduxjs/toolkit til å sette opp store, ikke redux
import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './redux/characters.state';
import starhsipsSlice from './redux-toolkit/starships.state';

export const store = configureStore({
  reducer: {
    'characters': charactersReducer, // Old-school kode
    [starhsipsSlice.name]: starhsipsSlice.reducer,
  },
});
