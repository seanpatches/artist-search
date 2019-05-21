import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';

function Releases({ releases, artist }) {
  const releaseList = releases.map(release => {
    return (
      <li key={release.id}>
        <Release releaseName={release.title} releaseArt={release.coverArt} releaseId={release.id} artist={artist} />
      </li>
    );
  });
  
  return (
    <ul>{releaseList}</ul>
  );
}
    
Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  artist: PropTypes.string
};

export default Releases;
