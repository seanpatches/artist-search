import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Song({ songId, songTitle }) {
  return (
    <Link to={`/lyrics/${songId}`}>
      {songTitle}
    </Link>
  );
}

Song.propTypes = {
  songId: PropTypes.string,
  songTitle: PropTypes.string,
};

export default Song;
