import React, { useState } from "react";
// useEffect,
import bandcampIcon from "../images/bandcampIcon.png";
import discogIcon from "../images/discogsIcon.png";
import youtubeIcon from "../images/youtubeIcon.png";
import Link from "./Link";
import fetchTrack from "../api/fetchTrack";

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

  const getLinks = async () => {
    const { youtubeUrl, discogsUrl, bandcampUrl } = await fetchTrack(track);

    setBandcampTrackInfo(bandcampUrl);
    setDiscogsTrackInfo(discogsUrl);
    setYoutubeTrackInfo(youtubeUrl);
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
