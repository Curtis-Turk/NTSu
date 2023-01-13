// import { load } from "cheerio";
// import fetch from "node-fetch";

import * as dotenv from "dotenv";
dotenv.config();

const youtubeSearch = async ({ title, artist, url }) => {
  console.log(process.env.YOUTUBE_KEY);
  // Authorization: Bearer [YOUR_ACCESS_TOKEN]
  // Accept: application/json

  // return fetch(url)
  //   .then((response) => response.text())
  //   .then((html) => {
  //     console.log(html);
  //   });
};

export default youtubeSearch;
