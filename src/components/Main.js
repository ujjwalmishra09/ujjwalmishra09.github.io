import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gists from './Gists';
import Search from './Search';
import fetchGists from '../actions/gistsActions';

function getStyles() {
  return {
    main: {
      maxWidth: 920,
      margin: 'auto',
      marginTop: 50
    }
  };
}

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(value) {
    this.props.dispatch(fetchGists(value));
  }

  render() {
    const { gists, fetching, fetched, error, dispatch } = this.props;
    const { main } = getStyles();
    const { search } = this.refs;

    return (
      <div style={main}>
        <Search ref='search' onSearch={this.onSearch} />
        {
          error &&
          <center> Some error occured </center>
        }

        {
          fetching && !fetched && !error &&
          <center> <h1> Please wait... </h1> </center>
        }

        {
          !fetching && fetched &&
          <Gists gists ={gists} searchValue={search && search.state.value} dispatch={dispatch}/>
        }
      </div>
    );
  }
}

Main.propTypes = {
  gists: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default connect(({ gistsReducer }) => {
  return {
    gists: gistsReducer.gists,
    fetching: gistsReducer.fetching,
    fetched: gistsReducer.fetched,
    error: gistsReducer.error
  };
})(Main);
