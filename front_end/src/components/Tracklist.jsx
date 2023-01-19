import Track from "./Track";

function Tracklist({ tracks, user }) {
  const listTracks = tracks?.map((track, i) => (
    <Track key={i} track={track} user={user} />
  ));
  if (listTracks) return <ul>{listTracks}</ul>;
}

export default Tracklist;
