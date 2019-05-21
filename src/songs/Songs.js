import React from 'react';
import Song from './Song';
import PropTypes from 'prop-types';

function Songs({ songs }) {
  const songList = songs.map(song => {
    return (
      <li key={song.id}>
        <Song songName={song.title} songId={song.id} />
      </li>
    );
  });

  return (
    <ul>{songList}</ul>
  );
}

Songs.propTypes = {
  songs: PropTypes.array.isRequired
};

export default Songs;
