import React from 'react';
import PropTypes from 'prop-types';

import Gist from './Gist';

export default class Gists extends React.Component {
  render() {
    const { gists, searchValue, dispatch } = this.props;

    const gistNodes = this.props.gists.map((gist) => {
      return (
        <Gist
          username={gist.owner.login}
          avatar={gist.owner.avatar_url}
          files={gist.files}
          id={gist.id}
          key={gist.id}
          dispatch={dispatch}
          forks={gist.forks}
        />
      );
    });

    const heading = searchValue && gists.length
      ? 'Gists Results'
      : `No results for specified value ''${searchValue}''`;

    return (
      <div>
        <center>
          <h4>{heading}</h4>
        </center>
        {gistNodes}
      </div>
    );
  }
}

Gists.propTypes = {
  gists: PropTypes.array.isRequired,
  searchValue: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
