import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fetchRecentEpisodes from "../api/fetchRecentEpisodes";

function episodeElement({ episodeUrl, episodeTitle, episodeImage }) {
  episodeUrl = "https://www.nts.live" + episodeUrl;

  console.log(episodeUrl);

  return (
    <Link
      key={episodeTitle}
      id={episodeTitle}
      to="/episode"
      state={{ episodeUrl }}
    >
      <div className="recent-episode">
        <div>{episodeTitle}</div>
        <img className="recent-episode-image" alt="" src={episodeImage}></img>
      </div>
    </Link>
  );
}

function RecentEpisodes() {
  const [recentEpisodeData, setRecentEpisodeData] = useState([]);

  useEffect(() => {
    fetchRecentEpisodes().then((data) => setRecentEpisodeData(data));
  }, []);

  const listEpisodes = recentEpisodeData?.map((ep) => {
    return episodeElement(ep);
  });

  if (listEpisodes) return <ul>{listEpisodes}</ul>;
}

export default RecentEpisodes;
