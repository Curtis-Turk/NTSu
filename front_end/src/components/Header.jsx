import { useState, useEffect } from "react";
import ntsScraper from "../api/ntsScraper";

function Header({ setEpisodeData }) {
  const [textInput, setTextInput] = useState("");
  const [episode, setEpisode] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (episode) {
      let fetchNts = async () => {
        const ntsData = await ntsScraper(episode);
        setData(ntsData);
      };
      fetchNts();
    }
  }, [episode]);

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    setEpisode(textInput);
    if (data) {
      setEpisodeData(data);
    }

    setTextInput("");
  };

  const devEpisode = () => {
    setEpisode(
      "https://www.nts.live/shows/canyoufeelthesun-w-call-super-parris/episodes/can-you-feel-the-sun-5th-january-2023"
    );
    if (data) {
      setEpisodeData(data);
    }
    setTextInput("");
  };

  // if (episode.match(/nts\.live\/shows.*/g)) {
  // }

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
    </div>
  );
}

export default Header;
