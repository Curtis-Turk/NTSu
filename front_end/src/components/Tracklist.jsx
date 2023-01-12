import Track from "./Track";

function Tracklist({ tracks }) {
  try {
    const listTracks = tracks?.map((track) => (
      <Track key={track.title} value={track} />
    ));

    return (
      <div>
        <ul>{listTracks}</ul>
      </div>
    );
  } catch (error) {
    console.log("custom tracklist errror");
  }
}

export default Tracklist;
