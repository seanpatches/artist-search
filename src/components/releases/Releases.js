import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';

function Releases({ releases }) {
  const releaseList = releases.map(release => {
    return (
      <li key={release.id}>
        <Release releaseName={release.title} releaseArt={release.coverArt} releaseId={release.id} />
      </li>
    );
  });
  
  return (
    <ul>{releaseList}</ul>
  );
}
    
Releases.propTypes = {
  releases: PropTypes.array.isRequired
};

export default Releases;
