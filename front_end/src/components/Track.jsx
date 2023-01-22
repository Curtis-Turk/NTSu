import { useState } from "react";
import { useLocation } from "react-router-dom";
import bandcampIcon from "../images/bandcampIcon.png";
import discogIcon from "../images/discogsIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import SiteLink from "./SiteLink";
import fetchTrack from "../api/fetchTrack";
import saveTrack from "../api/saveTrack";
import { useContext } from "react";
import { UserContext } from "../App";

const Track = ({ track }) => {
  const [fetchedTrack, setFetchedTrack] = useState(track);
  const { user } = useContext(UserContext);
  const location = useLocation();

  const getLinks = async () => {
    setFetchedTrack(await fetchTrack(track));
  };

  const clickSaveTrack = () => {
    saveTrack(track, user).then((data) => console.log(data));
  };

  return (
    <li>
      <div className="track_details">
        <div className="track_artist">{track.artist}</div>
        <div className="track_title">{track.title}</div>
      </div>
      <div className="track_options">
        {user && location.pathname === "/episode" ? (
          <div className="get_details" onClick={clickSaveTrack}>
            +
          </div>
        ) : null}
        <div className="get_details" onClick={getLinks}>
          &gt;
        </div>
      </div>
      <div className="site_links">
        <SiteLink
          className={"bandcamp"}
          trackInfo={fetchedTrack.bandcampUrl}
          icon={bandcampIcon}
        />
        <SiteLink
          className={"discogs"}
          trackInfo={fetchedTrack.discogsUrl}
          icon={discogIcon}
        />
        <SiteLink
          className={"youtube"}
          trackInfo={fetchedTrack.youtubeUrl}
          icon={youtubeIcon}
        />
      </div>
    </li>
  );
};
export default Track;
