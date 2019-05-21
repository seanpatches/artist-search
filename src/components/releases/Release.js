import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Release({ releaseName, releaseId }) {
  return (
    <Link to={`/songs/${releaseId}`}>
      {/* <img src={`${releaseArt}`} /> */}
      {releaseName}
    </Link>
  );
}

Release.propTypes = {
  releaseName: PropTypes.string,
  releaseArt: PropTypes.string,
  releaseId: PropTypes.string
};

export default Release;
