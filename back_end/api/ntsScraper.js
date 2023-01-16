import { load } from "cheerio";
import fetch from "node-fetch";

async function ntsScraper(episode) {
  const allTracks = [];
  let episodeTitle = "";
  let episodeImage = "";

  const response = await fetch(episode);
  const html = await response.text();
  const $ = load(html);
  episodeTitle = $("h1").text();
  $(".track").each((_, e) => {
    let track = { title: null, artist: null };
    track.title = $(e).children(".track__title").text();
    track.artist = $(e).children(".track__artist").first().text();
    // console.log(track);
    allTracks.push(track);
  });
  episodeImage = $(".background-image").first().attr("style").slice(21, -1);

  return {
    episodeUrl: episode,
    episodeTitle: episodeTitle,
    allTracks: allTracks,
    episodeImage: episodeImage,
  };
}

export default ntsScraper;
