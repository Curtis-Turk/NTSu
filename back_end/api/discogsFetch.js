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
      }
    });
};

export default discogsSearch;
// "Authorization": "OAuth oauth_consumer_key=\"" + DISCOGS_CONSUMER_KEY +
// "\",oauth_nonce=\"" + Date.now() +
// "\",oauth_signature=\"" + DISCOGS_SECRET +
// "\",oauth_signature_method=\"PLAINTEXT\"" +
// ",oauth_timestamp=\"" + Date.now() + "\""

// const headers = new fetch.Headers({
//   "User-Agent": "NTSu/1.0 (Macintosh; Intel Mac OS X 13.1)",
// });

// let fetchOptions = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     Authorization: {
//       oauth_consumer_key: key,
//       oauth_nonce: "random_string_or_timestamp",
//       oauth_signature: `${secret}&`,
//       oauth_signature_method: "PLAINTEXT",
//       oauth_timestamp: "current_timestamp",
//       oauth_callback: "your_callback",
//     },
//     "User-Agent": "NTSu/1.0 (Macintosh; Intel Mac OS X 13.1)",
//   },
// };
// let oauthurl = "https://api.discogs.com/oauth/request_token";
