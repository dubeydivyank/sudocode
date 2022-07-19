import "./Playlists.css";
import { useState } from "react";
import VideoList from "./VideoList";

const Playlists = () => {
  const [playlist, setPlaylist] = useState();

  const selectPlaylistHandler = (e) => {
    setPlaylist(e.target.innerText);
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="playlist-names">
        <div
          className="list-name"
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          System Design Primer Course
        </div>
        <div
          className="list-name"
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Low Level Design
        </div>
        <div
          className="list-name"
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Design Patterns
        </div>
        <div
          className="list-name"
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Resume Building
        </div>
        <div
          className="list-name"
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Mock Interviews
        </div>
        <div
          className="list-name"
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Misc
        </div>
      </div>

      <div>{playlist && <VideoList playlist={playlist} />}</div>
    </div>
  );
};

export default Playlists;
