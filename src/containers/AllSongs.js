import React, { PureComponent } from 'react';
import Songs from '../components/songs/Songs';
import fetchSongs from '../services/fetchSongs';

export default class AllSongs extends PureComponent {
  state = {
    songs: null,
    releaseId: (window.location.pathname).slice(7)
  }

  componentDidMount() {
    fetchSongs(this.state.releaseId)
      .then(response => {
        return this.setState({ songs: response.recordings });
      });
  }

  render() {
    const { songs } = this.state;
    return (
      <>
       {songs && <Songs songs={songs} />}
      </>
    );
  }
}
