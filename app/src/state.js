import { combineReducers, createStore } from 'redux';

import { charactersReducer } from './redux/characters.state';

const rootReducer = combineReducers({
  characters: charactersReducer
});

export const store = createStore(rootReducer);

