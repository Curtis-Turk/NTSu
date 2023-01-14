const discogsSearch = (track) => {
  if (track) {
    const searchTitle = track.title.split(" ").join("+");
    const searchArtist = track.artist.split(" ").join("+");

    const url = `https://api.discogs.com/database/search?q=${searchArtist}+${searchTitle}&per_page=1&page=1&type=all&type=all`;

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
