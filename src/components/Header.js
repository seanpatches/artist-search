import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import ArtistSearch from './artists/ArtistSearch';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  static propTypes = {
    history: PropTypes.object
  }

  state = {
    searchTerm: '',
  }
  

  searchHandler = () => {
    console.log(this.props);
    this.props.history.push(`/?searchTerm=${this.searchTerm}`);
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <ArtistSearch searchTerm={searchTerm} searchHandler={this.searchHandler} changeHandler={this.changeHandler} />
    );
  }
}

export default withRouter(Header);

