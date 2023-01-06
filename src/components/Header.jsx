import { useState } from "react";

function Header(props) {
  const [textInput, setTextInput] = useState("");

  const onChange = (e) => {
    setTextInput(e.target.value);
  };

  const onSubmit = () => {
    props.setEpisode(textInput);
  };

  return (
    <div>
      <h1>NTSu</h1>
      <input type="text" onChange={onChange} />
      <button onClick={() => onSubmit()} type="button">
        🔍
      </button>
    </div>
  );
}

export default Header;
