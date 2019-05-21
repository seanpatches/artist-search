import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import AllReleases from '../containers/AllReleases';
import AllSongs from '../containers/AllSongs';
import Lyrics from '../containers/Lyrics';

export default function App() {
  return (
  <>
      <Router>
        <Switch>
          <Route exact path="/" component={AllArtists}></Route>
          <Route path="/releases/:artist/:artistId" component={AllReleases}></Route>
          <Route path="/songs/:artist/:releaseId" component={AllSongs}></Route>
          <Route path="/lyrics/:artist/:title" component={Lyrics}></Route>
        </Switch>
      </Router>
    </>
  );
}

