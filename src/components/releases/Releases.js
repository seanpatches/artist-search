import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';
import styles from '../style/Releases.css';

function Releases({ releases, artist }) {
  const releaseList = releases.map(release => {
    return (
      <li key={release.id}>
        <Release releaseName={release.title} releaseArt={release.coverArt} releaseId={release.id} artist={artist} />
      </li>
    );
  });
  
  return (
    <ul className={styles.Releases}>{releaseList}</ul>
  );
}
    
Releases.propTypes = {
  releases: PropTypes.array.isRequired,
  artist: PropTypes.string
};

export default Releases;
