// import cheerio from "cheerio";

// const bandcampSearch = (track) => {
//   let searchTitle = track.title.split(" ").join("+");
//   let searchArtist = track.artist.split(" ").join("+");

//   const URL = `https://bandcamp.com/search?q=${searchTitle}+${searchArtist}&item_type=t&from=results`;

//   return fetch(URL)
//     .then((response) => response.text())
//     .then((html) => {
//       const $ = cheerio.load(html);
//       console.log($);
//       // $('.track').each((_, e) => {
//       // let track = { title: null, artist: null };
//       // track.title = $(e).children('.track__title').text();
//       // track.artist = $(e).children('.track__artist').first().text();
//       // allTracks.push(track);
//       // });

//       // return { episodeTitle: episodeTitle, allTracks: allTracks };
//     });
// };

const bandcampSearch = (track) => {
  if (track) {
    // console.log(track);
    let searchTitle = track.title.split(" ").join("+");
    let searchArtist = track.artist.split(" ").join("+");

    const url = `https://bandcamp.com/search?q=${searchTitle}+${searchArtist}&item_type=t&from=results`;

    fetch("http://localhost:3001/bandcamp", {
      method: "POST",
      body: JSON.stringify({ url: url }),
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
