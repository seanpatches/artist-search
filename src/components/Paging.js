import React from 'react';
import PropTypes from 'prop-types';
import './style/Paging.css';

function Paging({ currentPage, nextPage, previousPage, totalPages }) {
  return (
    <section id="Paging">
      {currentPage > 1 && <button onClick={previousPage}>Previous</button>}
      <span>Page {currentPage} of {totalPages}</span>
      {currentPage < totalPages && <button onClick={nextPage}>Next</button>}
    </section>
  );
}

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Paging;
