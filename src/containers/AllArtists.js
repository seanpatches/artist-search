import React, { PureComponent } from 'react';
import ArtistSearch from '../components/artists/ArtistSearch';
import Artists from '../components/artists/Artists';
import fetchArtists from '../services/fetchArtists';
import Paging from '../components/Paging';

export default class AllArtists extends PureComponent{
  state = {
    searchTerm: '',
    artists: [],
    offset: 0,
    page: 1,
    totalPages: 0
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

  searchHandler = event => {
    event.preventDefault();
    fetchArtists(this.state.searchTerm, this.state.offset)
      .then(response => {
        const { artists, count, offset } = response;
        return this.setState({ page: 1, artists: artists, totalPages: Math.ceil(count / 25), offset: offset });
      });
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  componentDidUpdate(_, prevState) {
    if(this.state.page === prevState.page) return null;
    fetchArtists(this.state.searchTerm, this.state.offset)
      .then(response => {
        const { artists } = response;
        return this.setState({ artists: artists });
      });
  }

  render() {
    const { artists, searchTerm, page, totalPages } = this.state;
    return (
      <>
        <ArtistSearch searchTerm={searchTerm} searchHandler={this.searchHandler} changeHandler={this.changeHandler} />
        <Paging currentPage={page} totalPages={totalPages} nextPage={this.nextPage} previousPage={this.previousPage} />
        <Artists artists={artists} />
      </>
    );
  }

}
