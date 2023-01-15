import Track from "./Track";

function Tracklist({ tracks }) {
  const listTracks = tracks?.map((track) => (
    <Track key={track.title} track={track} />
  ));
  return <ul>{listTracks}</ul>;
}

export default Tracklist;
