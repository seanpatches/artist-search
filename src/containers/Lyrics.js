import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fetchLyrics from '../services/fetchLyrics';
import Lyric from '../components/Lyric';
import styles from './style/Lyrics.css';

export default class Lyrics extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  state = {
    lyrics: null,
    artist: this.props.match.params.artist,
    title: this.props.match.params.title
  }

  componentDidMount() {
    fetchLyrics(this.state.artist, this.state.title)
      .then(res => {
        this.setState({ lyrics: res.lyrics });
      });
  }

  render() {
    const { lyrics, artist, title } = this.state;

    return (
      <section className={styles.Lyrics}>
        <Lyric artist={artist} title={title} lyrics={lyrics}/>
      </section>
    );
  }
}
