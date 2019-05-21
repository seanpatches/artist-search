import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import AllArtists from '../containers/AllArtists';
import AllReleases from '../containers/AllReleases';

export default function App() {
  return (
  <>
      <Router>
        <Switch>
          <Route exact path="/" component={AllArtists}></Route>
          <Route path="/releases/:artistId" component={AllReleases}></Route>
          {/* <Route path="/songs/:releaseId" component={AllSongs}></Route>
          <Route path="/lyrics/:songId" component={Lyrics}></Route> */}
        </Switch>
      </Router>
    </>
  );
}

