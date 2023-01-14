import Track from "./Track";

function Tracklist({ tracks }) {
  const listTracks = tracks?.map((track) => (
    <Track key={track.title} track={track} />
  ));

  // try {
  return (
    <div>
      <ul>{listTracks}</ul>
    </div>
  );
  // } catch (error) {
  //   console.log(error);
  //   return <div>We couldn't find that set, paste another NTS link</div>;
  // }
}

export default Tracklist;
