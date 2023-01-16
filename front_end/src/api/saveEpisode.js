const saveEpisode = ({ episodeTitle, episodeImage, allTracks }) => {
  fetch("http://localhost:3001/episode", {
    method: "POST",
    body: JSON.stringify({
      episodeTitle: episodeTitle,
      episodeImage: episodeImage,
      allTracks: allTracks,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export default saveEpisode;
