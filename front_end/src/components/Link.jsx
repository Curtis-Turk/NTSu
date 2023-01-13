import React from "react";

function Link({ className, trackInfo, icon }) {
  return (
    <div className={className}>
      {trackInfo ? (
        <a
          className="get_details"
          rel="noreferrer"
          href={trackInfo}
          target="_blank"
        >
          <img alt={className} src={icon}></img>
        </a>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default Link;
