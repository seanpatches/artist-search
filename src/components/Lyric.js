import React from 'react';
import PropTypes from 'prop-types';

function Lyric({ artist, title, lyrics }) {
  return (
    <div>
      <h2>{artist}</h2>
      <h3>{title}</h3>
      <p>{lyrics}</p>
    </div>
  );
}

Lyric.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string
};

export default Lyric;
