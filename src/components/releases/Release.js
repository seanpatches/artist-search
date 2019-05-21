import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Release({ releaseArt, releaseName, releaseId }) {
  return (
    <Link to={`/songs/${releaseId}`}>
      <img src={`${releaseArt}`} />
      {releaseName}
    </Link>
  );
    
}

Release.propTypes = {
  releaseName: PropTypes.string.isRequired,
  releaseArt: PropTypes.string.isRequired,
  releaseId: PropTypes.string.isRequired
};

export default Release;
