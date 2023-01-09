import cheerio from 'cheerio';

function bandcampSearch(track) {
	let searchTitle = track.title.split(' ').join('+');
	let searchArtist = track.artist.split(' ').join('+');

	const URL = `https://bandcamp.com/search?q=${searchTitle}+${searchArtist}&item_type=t&from=results`;

	return fetch(URL)
		.then((response) => response.text())
		.then((html) => {
			const $ = cheerio.load(html);
			console.log($);
			// $('.track').each((_, e) => {
			// let track = { title: null, artist: null };
			// track.title = $(e).children('.track__title').text();
			// track.artist = $(e).children('.track__artist').first().text();
			// allTracks.push(track);
			// });

			// return { episodeTitle: episodeTitle, allTracks: allTracks };
		});
}

export default bandcampSearch;
