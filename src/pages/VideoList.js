import React from "react";
import { useDbContext } from "../context/DbContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VideoList = ({ playlist }) => {
  const { videos } = useDbContext();
  const [playlistVideos, setPlaylistVideos] = useState(videos);

  useEffect(() => {
    if (!playlist) {
      const videoList = videos.filter((vid) => {
        return vid.playlist === "System Design Primer Course";
      });
      setPlaylistVideos([...videoList]);
    } else {
      const videoList = videos.filter((vid) => {
        return vid.playlist === playlist;
      });
      setPlaylistVideos([...videoList]);
    }
  }, [playlist]);

  return (
    <div id="video-list-container">
      {playlistVideos.map((vid) => {
        return (
          <div className="single-video">
            <Link to={`/video/${vid.ytVideoID}`}>
              <img
                style={{ height: "5rem" }}
                src={`https://img.youtube.com/vi/${vid.ytVideoID}/maxresdefault.jpg`}
                alt=""
              />
            </Link>
            <div className="video-text">
              <div>{vid.title}</div>
              <div>{vid["date-added"]}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoList;
