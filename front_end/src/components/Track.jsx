import React, { useEffect, useState } from "react";
import bandcampSearch from "../api/bandcampSearch";

const Track = (track) => {
  const [trackInfo, setTrackinfo] = useState(null);

  useEffect(() => {
    bandcampSearch(track.value).then((data) => {
      setTrackinfo(data.trackurl);
    });
  }, [track]);

  return (
    <li>
      <div className="track_details">
        <div className="track_artist">{track.value.artist}</div>
        <div className="track_title">{track.value.title}</div>
      </div>
      <div>
        {trackInfo ? (
          <a
            className="get_details"
            rel="noreferrer"
            href={trackInfo}
            target="_blank"
          >
            &gt;
          </a>
        ) : (
          <div> </div>
        )}
      </div>
    </li>
  );
};
export default Track;
