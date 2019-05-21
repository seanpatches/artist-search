import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ songTitle, artist }) {
  return (
    <Link to={`/lyrics/${artist}/${songTitle}`}>
      {songTitle}
    </Link>
  );
}

Song.propTypes = {
  songTitle: PropTypes.string,
  artist: PropTypes.string
};

export default Song;
