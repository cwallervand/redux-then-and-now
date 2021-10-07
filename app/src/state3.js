// MÅ SETTE OPP STORE MED TOOLIKT
import { configureStore } from '@reduxjs/toolkit';
import { charactersReducer } from './redux/characters.state';
import starhsipsSlice from './redux-toolkit/starships.state';

export const store = configureStore({
  reducer: {
    'characters': charactersReducer,
    [starhsipsSlice.name]: starhsipsSlice.reducer,
  },
});
