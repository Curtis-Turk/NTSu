const bandcampSearch = async (track) => {
  if (track) {
    const searchTitle = track.title.split(" ").join("+");
    const searchArtist = track.artist.split(" ").join("+");

    const url = `https://bandcamp.com/search?q=${searchTitle}+${searchArtist}&item_type=t&from=results`;

    return fetch("http://localhost:3001/bandcamp", {
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

export default bandcampSearch;
