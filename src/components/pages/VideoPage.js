import React from "react";
// import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { useVideoContext } from "../../context/VideoContext";
import "./VideoPage.css";

const VideoPage = () => {
  const { video } = useVideoContext();
  console.log(video);
  return (
    <div className="video-container">
      <ReactPlayer url={video.url} controls={true} />
    </div>
  );
};

export default VideoPage;
