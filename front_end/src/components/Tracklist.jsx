import Track from "./Track";

function Tracklist({ tracks }) {
  const listTracks = tracks?.map((track) => (
    <Track key={track.title} track={track} />
  ));
  if (listTracks) return <ul>{listTracks}</ul>;
}

export default Tracklist;
