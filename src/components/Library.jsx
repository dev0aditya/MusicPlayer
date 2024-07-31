import React from "react";
import LibrarySong from "./LibrarySong";
import { library } from "@fortawesome/fontawesome-svg-core";

const Library = ({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`Library ${libraryStatus ? "active-library" : ""}`}>
      <h2>library</h2>
      <div className="library-songs">
        {song.map((songs) => (
          <LibrarySong
            song={songs}
            setCurrentSong={setCurrentSong}
            songs={song}
            id={songs.id}
            key={songs.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
