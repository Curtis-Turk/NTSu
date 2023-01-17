import { load } from "cheerio";
import fetch from "node-fetch";

const bandcampSearch = async ({ searchTitle, searchArtist }) => {
  const url = `https://bandcamp.com/search?q=${searchTitle}+${searchArtist}&item_type=t&from=results`;

  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const $ = load(html);
      // let fetchTitle = $(".heading").first().text().trim();
      // let fetchArtist = $(".subhead").first().text().trim().slice(3);
      // console.log(artist, title);
      // console.log(fetchArtist, fetchTitle);
      let trackurl = $(".itemurl").first().text().split("\n").join("").trim();
      return trackurl;
    });
};

export default bandcampSearch;
