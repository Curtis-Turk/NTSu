const fetchUserTracks = async (user) => {
  const userTrackIds = await fetch("http://localhost:3001/user/tracks", {
    method: "POST",
    body: JSON.stringify({ user: user.username }),
    headers: {
      "Content-Type": "application/json",
      authorization: "Bearer " + user.token,
    },
  }).then((response) => response.json());

  console.log(userTrackIds);
  return userTrackIds;
};

export default fetchUserTracks;
