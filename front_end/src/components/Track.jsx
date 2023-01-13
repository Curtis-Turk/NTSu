import React, { useEffect, useState } from "react";
import bandcampSearch from "../api/bandcampSearch";
import bandcampIcon from "../images/bandcamp.png";
import discogIcon from "../images/discogsIcon.png";
import discogsSearch from "../api/discogsSearch";

const Track = (track) => {
  const [bandcampTrackInfo, setBandcampTrackInfo] = useState(null);
  const [discogsTrackInfo, setDiscogsTrackInfo] = useState(null);

  useEffect(() => {
    bandcampSearch(track.value).then((data) => {
      setBandcampTrackInfo(data.trackurl);
    });
    discogsSearch(track.value).then((data) => {
      setDiscogsTrackInfo(data.trackurl);
    });
  }, [track]);

  //

  return (
    <li>
      <div className="track_details">
        <div className="track_artist">{track.value.artist}</div>
        <div className="track_title">{track.value.title}</div>
      </div>
      <div className="bandcamp">
        {bandcampTrackInfo ? (
          <a
            className="get_details"
            rel="noreferrer"
            href={bandcampTrackInfo}
            target="_blank"
          >
            <img alt="bandcamp" src={bandcampIcon}></img>
          </a>
        ) : (
          <div> </div>
        )}
      </div>
      <div className="discogs">
        {discogsTrackInfo ? (
          <a
            className="get_details"
            rel="noreferrer"
            href={discogsTrackInfo}
            target="_blank"
          >
            Discogs<img alt="discogs" src={discogIcon}></img>
          </a>
        ) : (
          <div> </div>
        )}
      </div>
    </li>
  );
};
export default Track;
