import React from "react";
import ReactPlayer from "react-player";
import data from "../../data.json";
import "./VideoPage.css";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  let { videoId } = useParams();

  const video = data.videos.filter((vid) => {
    return vid.thumbnail === videoId;
  });

  return (
    <div className="video-container">
      {video.map((vid) => {
        return <ReactPlayer url={vid.url} controls={true} />;
      })}
    </div>
  );
};

export default VideoPage;
