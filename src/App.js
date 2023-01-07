import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Scraper from "./components/Scraper";
import Tracklist from "./components/Tracklist";

function App() {
  const [episode, setEpisode] = useState("");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    setTracks(Scraper(episode));
  }, [episode]);

  return (
    <div>
      <Header setEpisode={setEpisode} />
      <h2>Enter a NTS episode to view tracks</h2>
      <Tracklist tracks={tracks} />
    </div>
  );
}

export default App;
