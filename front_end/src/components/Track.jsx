import React, { useEffect, useState } from "react";
import bandcampSearch from "../api/bandcampSearch";

const Track = (track) => {
  const [trackInfo, setTrackinfo] = useState(null);

  useEffect(() => {
    bandcampSearch(track.value).then((data) => {
      console.log("data", data);
      setTrackinfo(data.trackurl);
      // console.log("trackinfo", trackInfo);
    });
  }, [track]);

  return (
    <li>
      <div className="track_details">
        <div className="track_artist">{track.value.artist}</div>
        <div className="track_title">{track.value.title}</div>
      </div>
      <div className="get_details">&gt;</div>
      <div className="bandcamp">
        {trackInfo ? <div>{trackInfo}</div> : <div>No link found</div>}
      </div>
      {/* <button className="get_details" onClick={bandcampSearch}>
        &gt;
      </button> */}
    </li>
  );
};

// onClick={bandcampSearch(track)}
export default Track;
