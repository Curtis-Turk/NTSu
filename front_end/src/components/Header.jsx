import { useState } from "react";

function Header({
  user,
  isLoggedIn,
  setIsLoggedIn,
  setCurrentPage,
  setEpisode,
}) {
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

  return (
    <div className="header">
      <h1 onClick={() => setCurrentPage("")}>NTSu</h1>
      <div className="search">
        <input type="text" onChange={onChange} value={textInput} />
        <button onClick={() => onSubmit()} type="button">
          🔍
        </button>
      </div>
      <button onClick={() => devEpisode()} type="button">
        Dev🔍
      </button>
      <button onClick={() => deleteEpisode()} type="button">
        delete
      </button>
      {isLoggedIn ? (
        <>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          <button onClick={() => setCurrentPage("user")}>👤</button>
        </>
      ) : (
        <button onClick={() => setCurrentPage("login")} type="button">
          login
        </button>
      )}
    </div>
  );
}

export default Header;
