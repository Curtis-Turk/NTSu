const ListTrack = (track) => {
  return (
    <li>
      <div className="track_artist">{track.value.artist}</div>
      <div className="track_title">{track.value.title}</div>
      <br/>
    </li>
  );
};

function Tracklist({ tracks }) {
  try {
    const listTracks = tracks.map((track) => (
      <ListTrack key={track.title} value={track} />
    ));
  
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
