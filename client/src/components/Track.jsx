import { useEffect, useState } from "react";
import bandcampIcon from "../images/bandcampIcon.png";
import discogIcon from "../images/discogsIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import fetchTrack from "../api/fetchTrack";
import SiteLink from "./SiteLink";
import TrackSaveButton from "./TrackSaveButton";

const Track = ({ track }) => {
  const [fetchedTrack, setFetchedTrack] = useState("");

  const getLinks = async () => {
    setFetchedTrack(await fetchTrack(track));
  };

  useEffect(() => {
    setFetchedTrack(track);
  }, [track]);

  return (
    <li>
      <div className="track_details" onClick={getLinks}>
        <div className="track_artist">{fetchedTrack.artist}</div>
        <div className="track_title">{fetchedTrack.title}</div>
      </div>
      <div className="track_options">
        <div className="get_details" onClick={getLinks}>
          &gt;
        </div>
        <TrackSaveButton track={fetchedTrack} />
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
