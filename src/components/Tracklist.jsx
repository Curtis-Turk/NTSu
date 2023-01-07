const ListTrack = (track) => {
  console.log(track.value.title);
  return (
    <li>
      {track.value.title} - {track.value.artist}
    </li>
  );
};

function Tracklist({ tracks }) {
  const listTracks = tracks.map((track) => (
    <ListTrack key={track.title} value={track} />
  ));

  return <ul>{listTracks}</ul>;
}

export default Tracklist;
