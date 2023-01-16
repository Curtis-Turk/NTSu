import { useState } from "react";

function Header({ setEpisode }) {
  const [textInput, setTextInput] = useState("");

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  // const onSubmit = () => {
  //   if (textInput.match(/nts\.live\/shows.*/g)) {
  //     console.log(textInput);
  //     // setEpisode(textInput);
  //     setTextInput("");
  //   }
  // };

  const devEpisode = () => {
    setEpisode(
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023"
    );

    setTextInput("");
  };

  const deleteEpisode = () => {
    fetch("http://localhost:3001/episode", {
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="header">
      <h1 onClick={() => window.location.reload(false)}>NTSu</h1>
      <input type="text" onChange={onChange} value={textInput} />
      {/* <button onClick={() => onSubmit()} type="button">
        🔍
      </button> */}
      <button onClick={() => devEpisode()} type="button">
        Dev-btn🔍
      </button>
      <button onClick={() => deleteEpisode()} type="button">
        delete
      </button>
    </div>
  );
}

export default Header;
