import { useState } from "react";
import bandcampIcon from "../images/bandcampIcon.png";
import discogIcon from "../images/discogsIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import SiteLink from "./SiteLink";
import fetchTrack from "../api/fetchTrack";
import saveTrack from "../api/saveTrack";

const Track = ({ track, user }) => {
  const [bandcampTrackUrl, setBandcampTrackUrl] = useState(track.bandcampUrl);
  const [discogsTrackUrl, setDiscogsTrackUrl] = useState(track.discogsUrl);
  const [youtubeTrackUrl, setYoutubeTrackUrl] = useState(track.youtubeUrl);

  const getLinks = async () => {
    const { youtubeUrl, discogsUrl, bandcampUrl } = await fetchTrack(track);

    setBandcampTrackUrl(bandcampUrl);
    setDiscogsTrackUrl(discogsUrl);
    setYoutubeTrackUrl(youtubeUrl);
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
        <div className="get_details" onClick={clickSaveTrack}>
          +
        </div>
        <div className="get_details" onClick={getLinks}>
          &gt;
        </div>
      </div>
      <div className="site_links">
        <SiteLink
          className={"bandcamp"}
          trackInfo={bandcampTrackUrl}
          icon={bandcampIcon}
        />
        <SiteLink
          className={"discogs"}
          trackInfo={discogsTrackUrl}
          icon={discogIcon}
        />
        <SiteLink
          className={"youtube"}
          trackInfo={youtubeTrackUrl}
          icon={youtubeIcon}
        />
      </div>
    </li>
  );
};
export default Track;
