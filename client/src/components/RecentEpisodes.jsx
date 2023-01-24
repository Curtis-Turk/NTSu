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
        className="recent-episode"
        to="/episode"
        onClick={() => setEpisode(episodeUrl)}
      >
        <div>{episodeTitle}</div>
        <img className="recent-episode-image" alt="" src={episodeImage}></img>
      </Link>
    );
  }

  useEffect(() => {
    fetchRecentEpisodes().then((data) => setRecentEpisodeData(data));
  }, []);

  const listEpisodes = recentEpisodeData?.map((ep) => {
    return episodeElement(ep);
  });

  if (listEpisodes)
    return (
      <>
        <h3>Latest</h3>
        <ul className="recent-episode-list">{listEpisodes}</ul>
      </>
    );
}

export default RecentEpisodes;
