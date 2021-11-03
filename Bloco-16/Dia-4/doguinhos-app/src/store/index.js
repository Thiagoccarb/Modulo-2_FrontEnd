// src/store/index.js
import { createStore } from 'redux';
// para usar os thunk, faz-se od 2 imports sbaixo
import { /*createStore,*/ applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//----------------------------------------

const GET_IMAGE = 'GET_IMAGE';
const REQUEST_IMAGE = 'REQUEST_IMAGE';
const FAILED_REQUEST = 'FAILED_REQUEST';

//-------------actionCreator1--------------
function getImage(img) {
  return { type: GET_IMAGE, img };
}

//-------------actionCreator2--------------
function requestDog() {
  return { type: REQUEST_IMAGE };
}

//-------------actionCreator3--------------
function failedRequest(error) {
  return { type: FAILED_REQUEST, payload: error };
}

export function fetchDog() {
  return async (dispatch) => {
    try {
      dispatch(requestDog());
      const request = await fetch('https://dog.ceo/api/breeds/image/random');
      const response = await request.url;
      console.log(response);
      dispatch(getImage(response));
    } catch ({error}) {
      dispatch(failedRequest({error}));
    }
  };
}

const initialState = {
  isFetching: false,
  imagePath: '',
  error: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGE:
      return { ...state, isFetching: true };
    case GET_IMAGE:
      return { ...state, imagePath: action.img, isFetching: false };
    case FAILED_REQUEST:
      return { ...state, error: action.payload, isFetching: false };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;