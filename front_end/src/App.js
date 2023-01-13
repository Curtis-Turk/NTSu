import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Scraper from "./api/Scraper";
import Tracklist from "./components/Tracklist";
import Landing from "./components/Landing";
import discogsSearch from "./api/discogsSearch";
// import youtubeSearch from "./api/youtubeSearch";

function App() {
  const [episode, setEpisode] = useState("");
  const [episodeData, setEpisodeData] = useState({});

  useEffect(() => {
    if (episode) {
      // console.log(episode);
      let fetchNts = async () => {
        const ntsData = await Scraper(episode);
        setEpisodeData(ntsData);
      };
      fetchNts();
    }
  }, [episode]);

  useEffect(() => {
    if (Object.keys(episodeData).length) {
      // console.log(episodeData);
      // youtubeSearch(episodeData.allTracks[9]);
      console.log(discogsSearch(episodeData.allTracks[9]));
    }
  }, [episodeData]);

  return (
    <div>
      <Header setEpisode={setEpisode} />
      <Landing episode={episode} />
      <h2>{episodeData.episodeTitle}</h2>
      {/* <div></div> */}
      {/* <Tracklist tracks={episodeData.allTracks} /> */}
    </div>
  );
}

export default App;
