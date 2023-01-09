const ListTrack = (track) => {
  return (
    <li>
      {track.value.title} - {track.value.artist}
    </li>
  );
};

function Tracklist({ tracks }) {
  try {
    console.log("tracks", tracks);
    const listTracks = tracks.map((track) => (
      <ListTrack key={track.title} value={track} />
    ));
    // console.log(tracks);
  
    return (
      <div>
        <ul>{listTracks}</ul>
      </div>
    );
  } catch (error) {
    console.log("custom tracklist errror")
  } 

}

export default Tracklist;
