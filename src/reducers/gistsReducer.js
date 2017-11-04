const initialState = {
  gists: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

  case 'FETCH_GISTS':
    return { ...state, fetching: true };

  case 'FETCH_GISTS_FULFILLED':
    return {
      ...state,
      fetching: false,
      fetched: true,
      gists: action.payload
    };

  case 'FETCH_GISTS_REJECTED':
    return {
      ...state,
      fetching: false,
      error: action.payload
    };

  default:
    return state;
  }

}
