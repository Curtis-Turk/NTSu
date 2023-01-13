const discogsSearch = (track) => {
  if (track) {
    const searchTitle = track.title.split(" ").join("+");
    const searchArtist = track.artist.split(" ").join("+");

    const url = `https://api.discogs.com/database/search?artist=${searchArtist}&${searchTitle}&per_page=3&page=1`;

    return fetch("http://localhost:3001/discogs", {
      method: "POST",
      body: JSON.stringify({
        title: track.title,
        artist: track.artist,
        url: url,
      }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json());
  }
};

export default discogsSearch;
