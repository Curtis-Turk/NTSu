import Track from "./Track";

function Tracklist({ tracks }) {
  const listTracks = tracks?.map((track, i) => {
    return <Track key={i} track={track} />;
  });

  if (listTracks.length) {
    return <ul>{listTracks}</ul>;
  } else {
    return <h3>No tracklist provided</h3>;
  }
}

export default Tracklist;
