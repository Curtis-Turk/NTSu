const bandcampSearch = (track) => {
  if (track) {
    const searchTitle = track.title.split(" ").join("+");
    const searchArtist = track.artist.split(" ").join("+");

    const url = `https://bandcamp.com/search?q=${searchTitle}+${searchArtist}&item_type=t&from=results`;

    fetch("http://localhost:3001/bandcamp", {
      method: "POST",
      body: JSON.stringify({
        title: track.title,
        artist: track.artist,
        url: url,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
};

export default bandcampSearch;
