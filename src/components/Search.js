import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, Glyphicon } from 'react-bootstrap';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onClick() {
    if (this.state.value) this.props.onSearch(this.state.value);
  }

  render() {
    return (
      <InputGroup bsSize="large">
        <FormControl
          type="text"
          value={this.state.value}
          placeholder="Enter user name like facebook or Shinichi-Nakagawa"
          onChange={this.handleChange}
        />
        <InputGroup.Addon onClick={this.onClick}>
          <Glyphicon glyph="search"/>
        </InputGroup.Addon>
      </InputGroup>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func
};
