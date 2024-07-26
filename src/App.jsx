import React, { useState } from "react";
import Player from "./components/Player";
import Songs from "./components/Songs";
import "./styles/app.scss";
import data from "./util";
import Library from "./components/Library";

function App() {
  //State
  const [song, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[2]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="App">
        <Songs currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <Library song={song} setCurrentSong={setCurrentSong} />
      </div>
    </>
  );
}

export default App;
