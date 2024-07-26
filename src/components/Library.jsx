import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ song, setCurrentSong }) => {
  return (
    <div className="Library">
      <h2>library</h2>
      <div className="library-songs">
        {song.map((songs) => (
          <LibrarySong
            song={songs}
            setCurrentSong={setCurrentSong}
            songs={song}
            id={songs.id}
            key={songs.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
