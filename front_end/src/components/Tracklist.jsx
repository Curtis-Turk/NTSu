import Track from './Track';

function Tracklist({ tracks }) {
	const listTracks = tracks?.map((track, i) => <Track key={i} track={track} />);
	if (listTracks) return <ul>{listTracks}</ul>;
}

export default Tracklist;
