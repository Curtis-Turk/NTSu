import { useState } from "react";

function Header({ isLoggedIn, setIsLoggedIn, setCurrentPage, setEpisode }) {
  const [textInput, setTextInput] = useState("");

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    if (textInput.match(/nts\.live\/shows.*/g)) {
      setEpisode(textInput);
      setTextInput("");
      setCurrentPage("episode");
    }
  };

  const devEpisode = () => {
    setEpisode(
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023"
    );

    setTextInput("");
    setCurrentPage("episode");
  };

  const deleteEpisode = () => {
    fetch("http://localhost:3001/episode/devepisode", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setEpisode("");
  };

  const login = () => {
    setEpisode("login");
  };

  return (
    <div className="header">
      <h1 onClick={() => window.location.reload(false)}>NTSu</h1>
      <input type="text" onChange={onChange} value={textInput} />
      <button onClick={() => onSubmit()} type="button">
        🔍
      </button>
      <button onClick={() => devEpisode()} type="button">
        Dev-btn🔍
      </button>
      <button onClick={() => deleteEpisode()} type="button">
        delete
      </button>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => login()} type="button">
          login
        </button>
      )}
    </div>
  );
}

export default Header;
