import { load } from "cheerio";
import fetch from "node-fetch";

const bandcampSearch = async (url) => {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const $ = load(html);
      let episodeTitle = $(".heading").first().text();
      let artist = $(".subhead").first().text();
      let trackurl = $(".itemurl").first().text();

      return { trackurl: trackurl };
    });
};

export default bandcampSearch;
