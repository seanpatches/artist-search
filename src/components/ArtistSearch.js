import React from 'react';
import PropTypes from 'prop-types';

function ArtistSearch({ searchTerm, bananaHandler }) {
  return (
    <header>
      <h1>Artist Search</h1>
      <form>
        <input type="text" name="text" value={searchTerm} />
        <button onSubmit={bananaHandler}>Search</button>
      </form>
    </header>
  );
}

ArtistSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  bananaHandler: PropTypes.func.isRequired
};

export default ArtistSearch;
