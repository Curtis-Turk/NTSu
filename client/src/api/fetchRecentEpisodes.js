export default function fetchRecentEpisodes(numberOfEpisodes) {
  return fetch("http://localhost:3001/episode/recents", {
    method: "POST",
    body: JSON.stringify({
      numberOfEpisodes: numberOfEpisodes,
    }),
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}
