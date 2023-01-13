import fetch from "node-fetch";

const discogsSearch = async ({ title, artist, url }) => {
  const headers = new fetch.Headers({
    "User-Agent": "NTSu/1.0 (Macintosh; Intel Mac OS X 13.1)",
  });

  console.log(url);
  return fetch(url, { headers: headers })
    .then((response) => response.text())
    .then((data) => console.log(data));
  // .then((html) => {

  // });
};

export default discogsSearch;
