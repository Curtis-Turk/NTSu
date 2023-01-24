export default function fetchRecentEpisodes() {
  return fetch("http://localhost:3001/episode/recents", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}
