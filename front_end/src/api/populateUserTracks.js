const populateEpisode = async (tracks) => {
  return fetch("http://localhost:3001/user/tracks/populate", {
    method: "POST",
    body: JSON.stringify({
      userTracks: tracks,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export default populateEpisode;
