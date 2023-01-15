import React, { useEffect, useState } from "react";
import bandcampSearch from "../api/bandcampSearch";
import bandcampIcon from "../images/bandcampIcon.png";
import discogsSearch from "../api/discogsSearch";
import discogIcon from "../images/discogsIcon.png";
import youtubeSearch from "../api/youtubeSearch";
import youtubeIcon from "../images/youtubeIcon.png";
import Link from "./Link";

const Track = ({ track }) => {
  const [bandcampTrackInfo, setBandcampTrackInfo] = useState(null);
  const [discogsTrackInfo, setDiscogsTrackInfo] = useState(null);
  const [youtubeTrackInfo, setYoutubeTrackInfo] = useState(null);

  // useEffect(() => {}, [
  //   track,
  //   bandcampTrackInfo,
  //   discogsTrackInfo,
  //   youtubeTrackInfo,
  // ]);

  const getLinks = () => {
    if (!bandcampTrackInfo) {
      bandcampSearch(track).then((data) => {
        setBandcampTrackInfo(data.trackurl);
      });
    }
    if (!discogsTrackInfo) {
      discogsSearch(track).then((data) => {
        setDiscogsTrackInfo(data.trackurl);
      });
    }
    if (!youtubeTrackInfo) {
      youtubeSearch(track).then((data) => {
        setYoutubeTrackInfo(data.trackurl);
      });
    }
  };

  return (
    <li>
      <div className="track_details">
        <div className="track_artist">{track.artist}</div>
        <div className="track_title">{track.title}</div>
      </div>
      <div className="site_links">
        <div className="get_details" onClick={getLinks}>
          &gt;
        </div>
        <Link
          className={"bandcamp"}
          trackInfo={bandcampTrackInfo}
          icon={bandcampIcon}
        />
        <Link
          className={"discogs"}
          trackInfo={discogsTrackInfo}
          icon={discogIcon}
        />
        <Link
          className={"youtube"}
          trackInfo={youtubeTrackInfo}
          icon={youtubeIcon}
        />
      </div>
    </li>
  );
};
export default Track;
