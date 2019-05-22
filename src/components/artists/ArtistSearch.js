import React from 'react';
import PropTypes from 'prop-types';
import '../style/ArtistSearch.css';

function ArtistSearch({ searchTerm, searchHandler, changeHandler }) {
  return (
    <header>
      <h1>Artist Search</h1>
      <form onSubmit={searchHandler} >
        <input type="text" name="searchTerm" value={searchTerm} onChange={changeHandler} />
        <button>Search</button>
      </form>
    </header>
  );
}

ArtistSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired
};

export default ArtistSearch;
