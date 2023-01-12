import cheerio from "cheerio";

async function Scraper(episode) {
  const allTracks = [];
  let episodeTitle = "";

  const response = await fetch(episode);
  const html = await response.text();
  const $ = cheerio.load(html);
  episodeTitle = $("h1").text();
  $(".track").each((_, e) => {
    let track = { title: null, artist: null };
    track.title = $(e).children(".track__title").text();
    track.artist = $(e).children(".track__artist").first().text();
    allTracks.push(track);
  });
  return { episodeTitle: episodeTitle, allTracks: allTracks };
}

export default Scraper;
