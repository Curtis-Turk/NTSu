import fetch from "node-fetch";

const youtubeSearch = async ({ searchTitle, searchArtist }) => {
  const key = process.env.YOUTUBE_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/search?q=${searchArtist}%20${searchTitle}`;

  let fullUrl = `${url}&key=${key}`;

  return fetch(fullUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.items) {
        return `https://www.youtube.com/watch?v=${data.items[0].id.videoId}`;
      }
    });
};

export default youtubeSearch;
