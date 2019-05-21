function fetchArtists(searchTerm, offset) {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25&offset=${offset}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch Artists';

      return json;
    });
}


export default fetchArtists;
