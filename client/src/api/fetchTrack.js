const fetchTrack = async (track) => {
  return fetch("http://localhost:3001/track", {
    method: "POST",
    body: JSON.stringify(track),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};

export default fetchTrack;
