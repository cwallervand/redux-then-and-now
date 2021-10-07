import { combineReducers } from 'redux';

import { charactersReducer } from './redux/characters.state';

export const rootReducer = combineReducers({
  characters: charactersReducer
});

