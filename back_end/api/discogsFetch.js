import fetch from "node-fetch";

const discogsSearch = async ({ title, artist, url, secret, key }) => {
  let fullUrl = `${url}&key=${key}&secret=${secret}`;

  return fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.results) {
        if (data.results[0]) {
          return { trackurl: `https://www.discogs.com${data.results[0].uri}` };
        }
        return { trackurl: "" };
      }
      console.log("No RESULTS");
    });
};

export default discogsSearch;
