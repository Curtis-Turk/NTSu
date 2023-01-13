import React, { useEffect, useState } from "react";
import bandcampSearch from "../api/bandcampSearch";
import bandcampIcon from "../images/bandcampIcon.png";
import discogIcon from "../images/discogsIcon.png";
import discogsSearch from "../api/discogsSearch";
import Link from "./Link";

const Track = ({ track }) => {
  const [bandcampTrackInfo, setBandcampTrackInfo] = useState(null);
  const [discogsTrackInfo, setDiscogsTrackInfo] = useState(null);

  useEffect(() => {
    bandcampSearch(track).then((data) => {
      setBandcampTrackInfo(data.trackurl);
    });
    discogsSearch(track).then((data) => {
      setDiscogsTrackInfo(data.trackurl);
    });
  }, [track]);

  return (
    <li>
      <div className="track_details">
        <div className="track_artist">{track.artist}</div>
        <div className="track_title">{track.title}</div>
      </div>
      <div className="site_links">
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
      </div>
    </li>
  );
};
export default Track;
