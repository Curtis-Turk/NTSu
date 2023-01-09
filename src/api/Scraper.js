import cheerio from 'cheerio';

function Scraper(episode) {
	const allTracks = [];
	let episodeTitle = '';

	return fetch(episode)
		.then((response) => response.text())
		.then((html) => {
			const $ = cheerio.load(html);
			episodeTitle = $('h1').text();
			$('.track').each((_, e) => {
				let track = { title: null, artist: null };
				track.title = $(e).children('.track__title').text();
				track.artist = $(e).children('.track__artist').first().text();
				console.log($(e).children('.track__artist'));
				allTracks.push(track);
			});

			return { episodeTitle: episodeTitle, allTracks: allTracks };
		});
}

export default Scraper;
