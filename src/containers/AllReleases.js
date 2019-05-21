import React, { PureComponent } from 'react';
import Releases from '../components/releases/Releases';
import fetchReleases from '../services/fetchReleases';
import { BrowserRouter as Router } from 'react-router-dom';

export default class AllReleases extends PureComponent {
  state = {
    releases: [],
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  componentDidMount() {
    let artistId = (window.location.pathname).slice(10);
    return fetchReleases(artistId)
      .then(res => console.log(res));
  }
}
