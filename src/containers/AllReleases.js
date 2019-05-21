import React, { PureComponent } from 'react';
import Releases from '../components/releases/Releases';
import fetchReleases from '../services/fetchReleases';
import Paging from '../components/Paging';

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
        return this.setState({ releases: releases, totalPages: Math.ceil(response.count / 25), offset: response.offset });
      });
  }

  nextPage = () => {
    this.setState(state => {
      return {
        page: (state.page + 1),
        offset: (state.offset + 25)
      };
    });
  }

  previousPage = () => {
    this.setState(state => {
      return {
        page: (state.page - 1),
        offset: (state.offset - 25)
      };
    });
  }

  componentDidMount() {
    this.releasesLoad();
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.page === prevState.page) return null;
    fetchReleases(this.state.artistId, this.state.offset)
      .then(response => {
        const { releases } = response;
        return this.setState({ releases: releases });
      });
  }

  render() {
    const { releases, totalPages, page } = this.state;
    return (
      <>
        <Paging currentPage={page} totalPages={totalPages} nextPage={this.nextPage} previousPage={this.previousPage} />

        {releases && <Releases releases={releases} />}
      </>
    );
  }
}
