import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tracklist from "./components/Tracklist";
import Landing from "./components/Landing";
import saveEpisode from "./api/saveEpisode";
// import discogsSearch from "./api/discogsSearch";
// import youtubeSearch from "./api/youtubeSearch";

function App() {
  const [episodeData, setEpisodeData] = useState({});

  useEffect(() => {
    saveEpisode(episodeData);
  }, [episodeData]);

  return (
    <div>
      <Header setEpisodeData={setEpisodeData} />
      <div id="main-card">
        <Landing episodeData={episodeData} />
        <img
          className="episode-image"
          src={episodeData.episodeImage}
          alt=""
        ></img>
        {Object.keys(episodeData).length ? (
          <h2>{episodeData.episodeTitle}</h2>
        ) : null}
        <Tracklist tracks={episodeData.allTracks} />
      </div>
    </div>
  );
}

export default App;
