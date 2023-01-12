import React from "react";

function Track(track) {
  return (
    <li>
      <div>
        <div className="track_artist">{track.value.artist}</div>
        <div className="track_title">{track.value.title}</div>
      </div>
      <div>&gt;</div>
    </li>
  );
}

export default Track;
