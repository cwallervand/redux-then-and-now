import 'whatwg-fetch'

export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

const getCharactersRequest = () => ({
  type: GET_CHARACTERS_REQUEST
});

const getCharactersSuccess = (characters) => ({
  type: GET_CHARACTERS_SUCCESS,
  payload: characters,
});

const getCharactersError = () => ({
  type: GET_CHARACTERS_ERROR
});

export const getCharacters =  async (dispatch) => {
  dispatch(getCharactersRequest());
  try {
    const response = await window.fetch('https://swapi.dev/api/people');
    const json = await response.json();
    dispatch(getCharactersSuccess(json.results))
    return json.results;
  } catch {
    dispatch(getCharactersError());
  }
}

// IKKE LOV TIL Å GJØRE DET SLIK UTEN THUNK MIDDLEWARE
// export const getCharacters = () => {
//   return async (dispatch) => {
//     dispatch(getCharactersRequest());
//     try {
//       const response = await window.fetch('https://swapi.dev/api/people');
//       const json = await response.json();
//       dispatch(getCharactersSuccess(json.results))
//       return json.results;
//     } catch {
//       dispatch(getCharactersError());
//     }
//   }
// }

const initialCharacterState = {
  data: [],
  status: {
    requested: false,
    success: false,
    error: false,
  }
};

export const charactersReducer = (state = initialCharacterState, action) => {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST:
      return ({
        ...state,
        status: {
          ...state.status,
          requested: true,
        }
      });
    case GET_CHARACTERS_SUCCESS:
      return ({
        ...state,
        data: action.payload,
        status: {
          ...state.status,
          requested: true,
          success: true,
        }
      });
    case GET_CHARACTERS_ERROR:
      return ({
        ...state,
        status: {
          ...state.status,
          requested: true,
          error: true,
        }
      });
    default:
      return state;
  }
}