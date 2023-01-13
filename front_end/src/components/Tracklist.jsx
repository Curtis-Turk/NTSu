import Track from "./Track";

function Tracklist({ tracks }) {
  try {
    const listTracks = tracks?.map((track) => (
      <Track key={track.title} track={track} />
    ));

    return (
      <div>
        <ul>{listTracks}</ul>
      </div>
    );
  } catch (error) {
    console.log(error);
    return <div>We couldn't find that set, paste another NTS link</div>;
  }
}

export default Tracklist;
