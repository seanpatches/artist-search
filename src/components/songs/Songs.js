import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';

function Songs({ songs, artist }) {
  const songList = songs.map(song => {
    return (
      <li key={song.id}>
        <Song songTitle={song.title} artist={artist} />
      </li>
    );
  });

  return (
    <ul>{songList}</ul>
  );
}

Songs.propTypes = {
  songs: PropTypes.array.isRequired,
  artist: PropTypes.string.isRequired
};

export default Songs;
