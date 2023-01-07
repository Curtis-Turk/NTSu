import cheerio from "cheerio";

function Scraper(episode) {
  const allTracks = [];
  let episodeTitle = "";

  fetch(episode)
    .then((response) => response.text())
    .then((html) => {
      const $ = cheerio.load(html);
      episodeTitle = $("h1").text();
      $(".track").each((_, e) => {
        let track = { title: null, artist: null };
        track.title = $(e).children(".track__title").text();
        track.artist = $(e).children(".track__artist").text();
        allTracks.push(track);
      });
      console.log(episodeTitle);
    });

  // return { episodeTitle: episodeTitle, allTracks: allTracks };
  return allTracks;
}

export default Scraper;
