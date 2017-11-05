const initialState = {
  forks: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

  case 'FETCH_FOKRS_PENDING':
    return {
      ...state,
      fetching: true,
      fetched: false,
      error: null
    };

  case 'FETCH_FOKRS_FULFILLED':
    return {
      ...state,
      fetching: false,
      fetched: true,
      forks: action.payload
    };

  case 'FETCH_FOKRS_REJECTED':
    return {
      ...state,
      fetching: false,
      error: action.payload
    };

  default:
    return state;
  }

}
