import axios from 'axios';

export default function fetchForks(id) {
  return (dispatch) => {
    dispatch({ type: 'FETCH_FORKS_PENDING' });
    axios.get(`https://api.github.com/gists/${id}/forks`)
      .then((response) => {
        dispatch({ type: 'FETCH_FORKS_FULFILLED', payload: { data: response.data, id } });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FORKS_REJECTED', payload: err });
      });
  };
}
