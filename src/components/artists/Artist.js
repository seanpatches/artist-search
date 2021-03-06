import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Artist({ name, id }) {
  return <Link to={`/releases/${name}/${id}`}>{name}</Link>;
}

Artist.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};

export default Artist;
