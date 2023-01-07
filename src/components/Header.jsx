import { useState } from "react";

function Header({ setEpisode }) {
  const [textInput, setTextInput] = useState("");

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    setEpisode(textInput);
  };

  // if (episode.match(/nts\.live\/shows.*/g)) {
  //   console.log(episode);
  // }

  return (
    <div className="header">
      <h1>NTSu</h1>
      <input type="text" onChange={onChange} />
      <button onClick={() => onSubmit()} type="button">
        🔍
      </button>
    </div>
  );
}

export default Header;
