
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

export default class File extends React.Component {
  render() {
    const { fileName, fileType } = this.props;
    return (
      <div>
        <Row>
          <Col xs={8} sm={8} md={8}>
            <p > {fileName} </p>
          </Col>
          <Col xs={4} sm={4} md={4}>
            <div>
              {fileType}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

File.propTypes = {
  fileName: PropTypes.string,
  fileType: PropTypes.string
};
