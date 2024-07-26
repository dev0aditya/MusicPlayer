import React from "react";

function LibrarySong({ song, songs, setCurrentSong, id }) {
  const songSelecHandler = () => {
    const selectSong = songs.filter((state) => state.id === id);
    setCurrentSong(selectSong[0]);
  };

  return (
    <div className="library-song" onClick={songSelecHandler}>
      <img alt={song.name} src={song.cover} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
