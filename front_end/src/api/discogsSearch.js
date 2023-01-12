const discogsSearch = (track) => {
  if (track) {
    const searchTitle = track.title.split(" ").join("+");
    const searchArtist = track.artist.split(" ").join("+");

    const url = `https://www.discogs.com/search/?q=${searchTitle}+${searchArtist}&type=master`;

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
