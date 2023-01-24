import { useEffect } from "react";
import { useState } from "react";
import fetchRecentEpisodes from "../api/fetchRecentEpisodes";

function episodeElement(episode, index) {
  return (
    <div key={index} class="recent-episode">
      <div>{episode.episodeTitle}</div>
      <img
        className="recent-episode-image"
        alt=""
        src={episode.episodeImage}
      ></img>
    </div>
  );
}

function RecentEpisodes() {
  const [recentEpisodeData, setRecentEpisodeData] = useState([]);

  useEffect(() => {
    fetchRecentEpisodes().then((data) => setRecentEpisodeData(data));
  }, []);

  const listEpisodes = recentEpisodeData?.map((ep, i) => {
    return episodeElement(ep, i);
  });

  if (listEpisodes) return <ul>{listEpisodes}</ul>;
}

export default RecentEpisodes;
