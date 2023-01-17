import fetch from "node-fetch";

const discogsSearch = async ({ searchTitle, searchArtist }) => {
  const secret = process.env.DISCOGS_SECRET;
  const key = process.env.DISCOGS_CONSUMER_KEY;
  const url = `https://api.discogs.com/database/search?q=${searchArtist}+${searchTitle}&per_page=1&page=1&type=all&type=all`;

  let fullUrl = `${url}&key=${key}&secret=${secret}`;

  return fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.results) {
        if (data.results[0]) {
          return { trackurl: `https://www.discogs.com${data.results[0].uri}` };
        }
        return { trackurl: "" };
      }
      console.log("No RESULTS");
      return { trackurl: "" };
    });
};

export default discogsSearch;
