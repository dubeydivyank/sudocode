import "./Playlists.css";
import { useState } from "react";
import VideoList from "./VideoList";

const Playlists = () => {
  const [playlist, setPlaylist] = useState();

  const selectPlaylistHandler = (e) => {
    setPlaylist(e.target.innerText);
  };

  return (
    <div className="playlist-container">
      <div className="playlist-names">
        <div
          // className="list-name"
          className={
            playlist === "System Design Primer Course"
              ? "list-name selected-playlist"
              : "list-name"
          }
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          System Design Primer Course
        </div>
        <div
          // className="list-name"
          className={
            playlist === "Low Level Design"
              ? "list-name selected-playlist"
              : "list-name"
          }
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Low Level Design
        </div>
        <div
          // className="list-name"
          className={
            playlist === "Design Patterns"
              ? "list-name selected-playlist"
              : "list-name"
          }
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Design Patterns
        </div>
        <div
          // className="list-name"
          className={
            playlist === 4 ? "list-name selected-playlist" : "list-name"
          }
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Resume Building
        </div>
        <div
          // className="list-name"
          className={
            playlist === "Mock Interviews"
              ? "list-name selected-playlist"
              : "list-name"
          }
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Mock Interviews
        </div>
        <div
          // className="list-name"
          className={
            playlist === "Misc" ? "list-name selected-playlist" : "list-name"
          }
          onClick={(e) => {
            selectPlaylistHandler(e);
          }}
        >
          Misc
        </div>
      </div>

      <div className="playlist-videos">
        {playlist && <VideoList playlist={playlist} />}
      </div>
    </div>
  );
};

export default Playlists;
