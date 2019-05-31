function fetchSongs(releaseId) {
  return fetch(`https://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch songs';
      return json;
    });
}

export default fetchSongs;
