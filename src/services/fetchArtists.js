function fetchArtists(searchTerm, offset) {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25&offset=${offset}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch artists';

      return json;
    });
}

export default fetchArtists;
