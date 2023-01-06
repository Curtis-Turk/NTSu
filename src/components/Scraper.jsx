import cheerio from "cheerio";

function Scraper(props) {
  let episode = props.episode;
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
  return <div></div>;
}

export default Scraper;
