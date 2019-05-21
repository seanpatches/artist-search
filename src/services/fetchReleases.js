function fetchReleases(artistId, offset) {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25&offset=${offset}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch releases';

      return json;
    })
    .then(json => {
      const releases = json.releases.map(release => {
        const image = release['cover-art-archive'].front ?
          `http://coverartarchive.org/release/${release.id}/front` :
          'https://bigbluetunes.files.wordpress.com/2018/07/romp-2018-208.jpg';          
        return {
          id: release.id,
          title: release.title,
          coverArt: image
        };});

      return {
        releases,
        offset: json['release-offset'],
        count: json['release-count']
      };
    });
}


export default fetchReleases;
