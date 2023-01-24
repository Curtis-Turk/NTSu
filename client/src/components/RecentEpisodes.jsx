import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import fetchRecentEpisodes from "../api/fetchRecentEpisodes";
import { Context } from "../App";

function RecentEpisodes() {
  const [recentEpisodeData, setRecentEpisodeData] = useState([]);

  const { setEpisode } = useContext(Context);

  function episodeElement({ episodeUrl, episodeTitle, episodeImage }) {
    episodeUrl = "https://www.nts.live" + episodeUrl;
    return (
      <Link
        key={episodeTitle}
        id={episodeTitle}
        to="/episode"
        onClick={() => setEpisode(episodeUrl)}
      >
        <div className="recent-episode">
          <div>{episodeTitle}</div>
          <img className="recent-episode-image" alt="" src={episodeImage}></img>
        </div>
      </Link>
    );
  }

  useEffect(() => {
    fetchRecentEpisodes().then((data) => setRecentEpisodeData(data));
  }, []);

  const listEpisodes = recentEpisodeData?.map((ep) => {
    return episodeElement(ep);
  });

  if (listEpisodes) return <ul>{listEpisodes}</ul>;
}

export default RecentEpisodes;
