import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Scraper from "./components/Scraper";

function App() {
  const [episode, setEpisode] = useState("");

  // const displayTracklist = () => {
  //   if (episode.match(/nts\.live\/shows.*/g)) {
  //     return console.log(episode);
  //   }
  // };

  return (
    <div>
      <Header setEpisode={setEpisode} />
      <h2>Enter a NTS episode to view tracks</h2>
      <p>{episode}</p>
      <Scraper episode={episode} />
    </div>
  );
}

export default App;
