import React, { PureComponent } from 'react';
import Releases from '../components/releases/Releases';
import fetchReleases from '../services/fetchReleases';

export default class AllReleases extends PureComponent {
  state = {
    releases: null,
    artistId: (window.location.pathname).slice(10),
    offset: 0,
    page: 1,
    totalPages: 0

  }

  releasesLoad = () =>{
    const { artistId, offset } = this.state;
    fetchReleases(artistId, offset)
      .then(response => {
        const { releases } = response;
        const offset = response['release-offset'];
        const count = response['release-count'];
        return this.setState({ releases: releases, totalPages: Math.ceil(count / 25), offset: offset });
      });
  }

  componentDidMount() {
    this.releasesLoad();
  }

  render() {
    const { releases } = this.state;
    return (
      <>
      <p>howdy</p>
        {releases && <Releases releases={releases} />}
      </>
    );
  }
}
