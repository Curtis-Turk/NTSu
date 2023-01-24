import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Tracklist from "../components/Tracklist";
import fetchEpisode from "../api/fetchEpisode";
import populateEpisode from "../api/populateEpisode";

function EpisodePage() {
  const [episodeData, setEpisodeData] = useState({});
  const location = useLocation();
  const { episode } = location.state || "";

  useEffect(() => {
    if (episode) {
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
    <>
      {Object.keys(episodeData).length ? (
        <div id="episode">
          <img
            className="episode-image"
            src={episodeData.episodeImage}
            alt=""
          ></img>

          <h2>{episodeData.episodeTitle}</h2>
          <Tracklist tracks={episodeData.allTracks} />
        </div>
      ) : (
        <p>no episode data</p>
      )}
    </>
  );
}

export default EpisodePage;
