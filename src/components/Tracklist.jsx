const ListTrack = (track) => {
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
  console.log(tracks);

  return (
    <div>
      <ul>{listTracks}</ul>
    </div>
  );
}

export default Tracklist;
