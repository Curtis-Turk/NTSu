const getTrackLinks = async (track) => {
	const searchTitle = track.title.split(' ').join('+');
	const searchArtist = track.artist.split(' ').join('+');

	return await bandcampSearch({ searchTitle, searchArtist });
};
