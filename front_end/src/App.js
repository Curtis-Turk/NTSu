import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tracklist from "./components/Tracklist";
import Landing from "./components/Landing";
import fetchEpisode from "./api/fetchEpisode";
import populateEpisode from "./api/populateEpisode";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [episodeData, setEpisodeData] = useState({});
  const [episode, setEpisode] = useState("");

  useEffect(() => {
    if (episode === "login") {
      setEpisodeData({ login: true });
    } else if (episode) {
      fetchEpisode(episode)
        .then((data) => {
          return populateEpisode(data);
        })
        .then((data) => {
          setEpisodeData(data);
        });
    }
  }, [episode]);

  return (
    <div>
      <Header setEpisode={setEpisode} />
      <div id="main-card">
        <Landing episodeData={episodeData} />
        <img
          className="episode-image"
          src={episodeData.episodeImage}
          alt=""
        ></img>
        {Object.keys(episodeData).length > 1 ? (
          <h2>{episodeData.episodeTitle}</h2>
        ) : null}
        <Tracklist tracks={episodeData.allTracks} />
      </div>
      <div id="login">
        <Login episodeData={episodeData} />
      </div>
      <div id="signup">
        <Signup episodeData={episodeData} />
      </div>
    </div>
  );
}

export default App;
