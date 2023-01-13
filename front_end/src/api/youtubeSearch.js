const youtubeSearch = (track) => {
  if (track) {
    const searchTitle = track.title.split(" ").join("+");
    const searchArtist = track.artist.split(" ").join("+");

    const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchArtist}%20${searchTitle}`;

    return fetch("http://localhost:3001/youtube", {
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

export default youtubeSearch;
