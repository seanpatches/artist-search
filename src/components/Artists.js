import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';

function Artists({ artists }) {
  const artistList = artists.map(artist => {
    <li key={artist.id}>
      <Artist name={artist.name} />
    </li>;
  });

  return (
    <ul>{artistList}</ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};

export default Artists;
