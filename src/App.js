import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [episode, setEpisode] = useState(textInput);

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = (e) => {
    setEpisode(textInput);
  };

  return (
    <div>
      <h1>NTSu</h1>
      <input type="text" onChange={onChange} />
      <button onClick={onSubmit} type="button">
        GET TRACKS
      </button>
      <h2>Enter a NTS episode to view tracks</h2>
      <p>{episode}</p>
    </div>
  );
}

export default App;
