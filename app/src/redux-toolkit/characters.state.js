import { createSlice } from '@reduxjs/toolkit'

// Ingen action navn konstanter

const initialCharacterState = {
  data: [],
  status: {
    requested: false,
    success: false,
    error: false,
  }
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialCharacterState,
  reducers: {
    // Dette er navnet på action-functionen
    getCharactersRequest: (state) => {
      return ({
        ...state,
        status: {
          ...state.status,
          requested: true,
        }
      });
    },
    // Hver funksjon tar inn state og action, gjør seg veldig godt med Typescript
    getCharactersSuccess: (state, action) => {
      return ({
        ...state,
        data: action.payload,
        status: {
          ...state.status,
          requested: true,
          success: true,
        }
      });
    },
    getCharactersError: (state) => {
      return ({
        ...state,
        status: {
          ...state.status,
          requested: true,
          error: true,
        }
      });
    },
  },
})

// Kunne vært eksponert ved behov
const {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersError,
} = charactersSlice.actions

// Trenger ikke thunk middleware for å gjøre dette
export const getCharacters = () => {
  return async (dispatch) => {
    dispatch(getCharactersRequest());
    try {
      const response = await window.fetch('https://www.swapi.tech/api/people');
      const json = await response.json();
      dispatch(getCharactersSuccess(json.results))
      return json.results;
    } catch {
      dispatch(getCharactersError());
    }
  }
}

export default charactersSlice