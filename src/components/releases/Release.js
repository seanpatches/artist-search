import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Release({ releaseArt, releaseName, releaseId, artist }) {
  return (
    <Link to={`/songs/${artist}/${releaseId}`}>
      <img width="100px" src={`${releaseArt}`} />
      <p>{releaseName}</p>
    </Link>
  );
}

Release.propTypes = {
  releaseName: PropTypes.string,
  releaseArt: PropTypes.string,
  releaseId: PropTypes.string,
  artist: PropTypes.string
};

export default Release;
