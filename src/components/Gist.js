
import React from 'react';
import PropTypes from 'prop-types';
import { Image, Thumbnail, Row, Col, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import fetchForks from '../actions/forksActions';

import File from './File';

function getStyles() {
  return {
    image: {
      height: 50,
      width: 50
    }
  };
}

export default class Gist extends React.Component {
  constructor(props) {
    super(props);
    this.onShowForks = this.onShowForks.bind(this);
  }

  onShowForks() {
    const { dispatch, id, forks } = this.props;
    if (!forks) dispatch(fetchForks(id));
  }

  render() {
    const { username, avatar, files, forks } = this.props;
    const { image } = getStyles();
    const filesNodes = Object.keys(files)
      .map((fileName, i) => {
        return (
          <File key={i} fileName={fileName} fileType={files[fileName].type} />
        );
      });
    const forksNodes = forks && forks.map(({ owner, forks_url }, i) => {
      return (
        <div key={i}>
          <a href={forks_url}><img src={owner.avatar_url} style={image} /></a>{owner.login} // eslint-disable-line
        </div>
      );
    });

    const message = forks && !forks.length && 'No forks found';

    const popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" title="forks">
         {forksNodes}
         {message}
      </Popover>
    );

    return (
      <Thumbnail>
        <Row>
          <Col xs={12} sm={2} md={2}>
            <Image src={avatar} style={image}/>
          </Col>
          <Col xs={12} sm={10} md={10}>
            <div >
              <h4>{username}</h4>
              <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                onEnter={this.onShowForks}
                overlay={popoverClickRootClose}
              >
                <Button >Check Forks</Button>
              </OverlayTrigger>
              <hr />
              {filesNodes}
            </div>
          </Col>
        </Row>
      </Thumbnail>
    );
  }
}

Gist.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  files: PropTypes.object,
  avatar: PropTypes.string,
  forks: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};
