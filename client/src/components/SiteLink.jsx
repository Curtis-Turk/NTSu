function SiteLink({ className, trackInfo, icon }) {
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
        <img alt=""></img>
      )}
    </div>
  );
}

export default SiteLink;
