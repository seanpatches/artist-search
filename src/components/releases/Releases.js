import React from 'react';
import Release from './Release';
import PropTypes from 'prop-types';

function Releases({ releases }) {
  const releaseList = releases.map(release => {
    return (
      <li key={release.id}>
        <Release name={release.name} id={release.id} />
      </li>
    );
  });

  return (
    <ul>{releaseList}</ul>
  );
}

Releases.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    art: PropTypes.string.isRequired
  }))
};

export default Releases;
