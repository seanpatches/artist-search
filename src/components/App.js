import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import ArtistSearch from './ArtistSearch';

export default function App() {
  return <ArtistSearch searchTerm="banana" />;
}
