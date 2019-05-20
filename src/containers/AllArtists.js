import React, { PureComponent } from 'react';
import ArtistSearch from '../components/ArtistSearch';
import Artists from '../components/Artists';
import fetchArtists from '../services/fetchArtists';

export default class AllArtists extends PureComponent{
  state = {
    searchTerm: '',
    artists: [],
    offset: 0,
    page: 1
  }

  searchHandler = event => {
    event.preventDefault();
    fetchArtists(this.state.searchTerm, this.state.offset)
      .then(response => {
        return this.setState({ artists: response });
      });
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.searchTerm !== this.state.searchTerm);
  // }

  render() {
    const { artists, searchTerm } = this.state;
    return (
      <>
      <ArtistSearch searchTerm={searchTerm} searchHandler={this.searchHandler} changeHandler={this.changeHandler} />
      <Artists artists={artists} />
      </>
    );
  }

}
