import fetch from "node-fetch";

const youtubeSearch = async ({ title, artist, url, key }) => {
  let fullUrl = `${url}&key=${key}`;

  return fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.items) {
        return {
          trackurl: `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`,
        };
      }
    });
};

export default youtubeSearch;
