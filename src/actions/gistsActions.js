import axios from 'axios';

export default function fetchGists(username) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_GISTS_PENDING' });
    axios.get(`https://api.github.com/users/${username}/gists`)
      .then((response) => {
        dispatch({ type: 'FETCH_GISTS_FULFILLED', payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_GISTS_REJECTED', payload: err });
      });
  };
}
