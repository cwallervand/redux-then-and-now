import { createSlice } from '@reduxjs/toolkit'

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
    getCharactersRequest: (state) => {
      return ({
        ...state,
        status: {
          ...state.status,
          requested: true,
        }
      });
    },
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
    getCharactersError: (state, action) => {
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

export const { getCharactersRequest, getCharactersSuccess, getCharactersError } = charactersSlice.actions

export const getCharacters = async (dispatch) => {
  dispatch(getCharactersRequest());
  try {
    const response = await window.fetch('https://swapi.dev/api/people');
    const json = await response.json();
    dispatch(getCharactersSuccess(json.results))
  } catch {
    dispatch(getCharactersError());
  }
}

export default charactersSlice.reducer