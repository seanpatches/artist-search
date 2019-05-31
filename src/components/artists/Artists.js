import React from 'react';
import Artist from './Artist';
import PropTypes from 'prop-types';
import styles from '../style/Artists.css';

function Artists({ artists }) {
  const artistList = artists.map(artist => {
    return (
      <li key={artist.id}>
        <Artist name={artist.name} id={artist.id} />
      </li>
    );
  });

  return (
    <ul className={styles.Artists}>{artistList}</ul>
  );
}

Artists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};

export default Artists;
