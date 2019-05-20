import React from 'react';
import PropTypes from 'prop-types';

function Artist({ name }) {
  return <span>Name: {name}</span>;
}

Artist.propTypes = {
  name: PropTypes.string.isRequired
};

export default Artist;
