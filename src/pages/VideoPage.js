import React from "react";
import ReactPlayer from "react-player/youtube";
import data from "../data.json";
import "./VideoPage.css";
import { useParams } from "react-router-dom";

const VideoPage = () => {
  let { videoId } = useParams();

  const video = data.videos.filter((vid) => {
    return vid.ytVideoID === videoId;
  });

  const likeHandler = (video) => {
    data["users"]["dummy-user"]["liked"].push(video);
    console.log("first");
  };

  return (
    <div className="video-container">
      {video.map((vid) => {
        return (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${vid.ytVideoID}`}
            controls={true}
            width="100%"
            // height="100%"
          />
        );
      })}
      <button
        onClick={() => {
          likeHandler(video[0]);
        }}
      >
        Like
      </button>
      <button>Watch Later</button>
    </div>
  );
};

export default VideoPage;
