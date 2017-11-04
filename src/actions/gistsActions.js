import axios from 'axios';

export function fetchGists(username) {

  return (dispatch) => {
    axios.get(`https://api.github.com/users/${username}/gists`)
        .then((response) => {
          dispatch({ type: 'FETCH_GISTS_FULFILLED', payload: response.data.data });
        })
        .catch((err) => {
          dispatch({ type: 'FETCH_GISTS_REJECTED', payload: err });
        });
  };
}
