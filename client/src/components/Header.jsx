import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ episode, setEpisode, user, setUser }) {
  const [textInput, setTextInput] = useState("");
  // const [episode, setEpisode] = useState("");
  const [episodeLink, setEpisodeLink] = useState(null);

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    if (textInput.match(/nts\.live\/shows.*/g)) {
      setEpisode(textInput);
    }
  };

  const enterToSubmit = (event) => {
    if (event.keyCode === 13) onSubmit();
  };

  const devEpisode = () => {
    setEpisode(
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023"
    );
  };

  // const deleteEpisode = () => {
  // 	fetch('http://localhost:3001/episode/devepisode', {
  // 		method: 'DELETE',
  // 		headers: { 'Content-Type': 'application/json' },
  // 	});
  // 	setEpisode('');
  // };

  useEffect(() => {
    if (episode) {
      setEpisodeLink(
        <Link id="dummylink" to="/episode" state={{ episode }}></Link>
      );
    }
  }, [episode]);

  useEffect(() => {
    if (episodeLink) document.getElementById("dummylink").click();
    setEpisode("");
  }, [episodeLink, setEpisode]);

  return (
    <div className="header">
      <Link className="link" to="/">
        <h1>NTSu</h1>
      </Link>

      {episodeLink}

      <div className="search">
        <input type="text" onChange={onChange} value={textInput} />
        <button
          className="link"
          onClick={() => onSubmit()}
          onKeyDown={enterToSubmit}
        >
          🔍
        </button>
      </div>

      <button className="link" onClick={() => devEpisode()}>
        dev🔍
      </button>

      {user ? (
        <Link className="link" to="/user">
          👤
        </Link>
      ) : null}

      {user ? (
        <button className="link" onClick={() => setUser(null)}>
          Logout
        </button>
      ) : (
        <Link className="link" to="/login">
          Login
        </Link>
      )}
    </div>
  );
}

export default Header;
