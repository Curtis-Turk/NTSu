function Tracklist({ tracks }) {
  return (
    <ul>
      {tracks.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Tracklist;
