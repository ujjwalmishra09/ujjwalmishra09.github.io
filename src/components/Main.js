import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Gists from './Gists';
import Search from './Search';
import { fetchGists } from '../actions/gistsActions';

function getStyles() {
  return {
    main: {
      width: 720,
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
    const { main } = getStyles();
    return (
      <div style={main}>
        <Search onSearch={this.onSearch} />
        {/* <Gists gists ={this.props.gists}/> */}
      </div>
    );
  }
}

Main.propTypes = {
  gists: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect(({ gistsReducer }) => {
  return {
    gists: gistsReducer.gists
  };
})(Main);
