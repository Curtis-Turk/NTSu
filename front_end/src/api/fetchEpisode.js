const fetchEpisode = async (episodeUrl) => {
	return fetch('http://localhost:3001/episode', {
		method: 'POST',
		body: JSON.stringify({
			episodeUrl: episodeUrl,
		}),
		headers: { 'Content-Type': 'application/json' },
	}).then((response) => response.json());
};

export default fetchEpisode;
