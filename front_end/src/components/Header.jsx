import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ user, setUser }) {
  const [textInput, setTextInput] = useState("");
  const [episode, setEpisode] = useState("");
  const [episodeLink, setEpisodeLink] = useState(null);

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    console.log(textInput);
    if (textInput.match(/nts\.live\/shows.*/g)) {
      setEpisode(textInput);
    }
  };

  // window.addEventListener()
  const enterToSubmit = (event) => {
    if (event.keyCode === 13) {
      console.log(event.keyCode);
      onSubmit();
    }
  };

  const devEpisode = () => {
    setEpisode(
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023"
    );
    console.log("devEpisode called", episode);
    // setTextInput('');
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
  }, [episodeLink]);

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
