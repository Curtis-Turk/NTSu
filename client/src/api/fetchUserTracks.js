const fetchUserTracks = async (user) => {
  const userTrackIds = await fetch("http://localhost:3001/user/tracks", {
    method: "POST",
    body: JSON.stringify({ username: user.username }),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + user.token,
    },
  }).then((response) => response.json());

  return userTrackIds;
};

export default fetchUserTracks;
