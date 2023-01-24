const populateEpisode = async (episode) => {
	return fetch('http://localhost:3001/episode/populate', {
		method: 'POST',
		body: JSON.stringify({
			episodeUrl: episode.episodeUrl,
		}),
		headers: { 'Content-Type': 'application/json' },
	}).then((response) => response.json());
};

export default populateEpisode;
