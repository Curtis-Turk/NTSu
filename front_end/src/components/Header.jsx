import { useState } from "react";

function Header({ setEpisode }) {
  const [textInput, setTextInput] = useState("");

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    setEpisode(textInput);
    setTextInput("");
  };

  const devEpisode = () => {
    setEpisode(
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023"
    );
  };

  // if (episode.match(/nts\.live\/shows.*/g)) {
  // }

  return (
    <div className="header">
      <h1>NTSu</h1>
      <input type="text" onChange={onChange} value={textInput} />
      <button onClick={() => onSubmit()} type="button">
        🔍
      </button>
      <button onClick={() => devEpisode()} type="button">
        Dev-btn🔍
      </button>
    </div>
  );
}

export default Header;
