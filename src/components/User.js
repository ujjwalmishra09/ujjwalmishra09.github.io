
import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.avatar} className="avatar"/>
        <div className="username">
          {this.props.firstname} {this.props.lastname}
        </div>
      </div>
    );
  }
}

User.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  avatar: PropTypes.string
};
