const initialState = {
  gists: [],
  fetching: false,
  fetched: false,
  error: null
};

export default function reducer(state = initialState, action) {

  switch (action.type) {

  case 'FETCH_GISTS_PENDING':
    return {
      ...state,
      fetching: true,
      fetched: false,
      error: null
    };

  case 'FETCH_GISTS_FULFILLED':
    return {
      ...state,
      fetching: false,
      fetched: true,
      gists: action.payload
    };
  case 'FETCH_FORKS_FULFILLED': {

    const gists = state.gists.map((gist) => {
      if (gist.id === action.payload.id) gist.forks = action.payload.data;
      return gist;
    });

    return {
      ...state,
      gists
    };
  }

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
