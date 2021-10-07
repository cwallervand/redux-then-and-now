import 'whatwg-fetch'

export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

const defaultCharactersState = {
  data: [],
  status: {
    requested: false,
    success: false,
    error: false,
  }
};

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
    console.log('RESPONE', response);
    const json = await response.json();
    console.log('json', json.results)
    dispatch(getCharactersSuccess(json.results))
  } catch {
    dispatch(getCharactersError());
  }
}

export const charactersReducer = (state = defaultCharactersState, action) => {

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