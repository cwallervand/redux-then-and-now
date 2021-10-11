import { createSlice } from '@reduxjs/toolkit'

const initialStarshipsState = {
  data: [],
  status: {
    requested: false,
    success: false,
    error: false,
  }
};

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: initialStarshipsState,
  reducers: {
    getStarshipsRequest: (state) => {
      return ({
        ...state,
        status: {
          ...state.status,
          requested: true,
        }
      });
    },
    getStarshipsSuccess: (state, action) => {
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
    getStarshipsError: (state, action) => {
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

const {
  getStarshipsRequest,
  getStarshipsSuccess,
  getStarshipsError,
} = starshipsSlice.actions;

export const getStarships = () => {
  return async (dispatch) => {
    dispatch(getStarshipsRequest());
    try {
      const response = await window.fetch('https://www.swapi.tech/api/starships');
      const json = await response.json();
      dispatch(getStarshipsSuccess(json.results))
    } catch {
      dispatch(getStarshipsError());
    }
  }
}

export default starshipsSlice;