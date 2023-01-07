import cheerio from "cheerio";

function Scraper(episode) {
  const allTracks = [];

  fetch(episode)
    .then((response) => response.text())
    .then((html) => {
      const $ = cheerio.load(html);
      $(".track").each((_, e) => {
        let track = { title: null, artist: null };
        track.title = $(e).children(".track__title").text();
        track.artist = $(e).children(".track__artist").text();
        allTracks.push(track);
      });
    });

  return allTracks;
}

export default Scraper;
