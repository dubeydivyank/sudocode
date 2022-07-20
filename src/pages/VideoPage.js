import React from "react";
import ReactPlayer from "react-player/youtube";
import data from "../data.json";
import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useDbContext } from "../context/DbContext";
import ReactDOM from "react-dom";
import AlertModal from "../components/modal/AlertModal";

const VideoPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isInWatchLater, setIsInWatchLater] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [alert, setAlert] = useState("");

  //Context
  const {
    liked,
    watchLater,
    addToLiked,
    removeFromLiked,
    addToWatchList,
    removeFromWatchlist,
  } = useDbContext();
  const { user } = useAuthContext();

  //get video using video id in URL
  const { videoId } = useParams();
  const video = data.videos.filter((vid) => {
    return vid.ytVideoID === videoId;
  });

  //Check if current video is in user's liked list
  useEffect(() => {
    try {
      const likedVideoKeys = Object.keys(liked);
      likedVideoKeys.forEach((val) => {
        if (val === video[0].id) {
          setIsLiked(true);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [liked]);

  //check if current video is in watch later
  useEffect(() => {
    try {
      const watchLaterVideoKeys = Object.keys(watchLater);
      watchLaterVideoKeys.forEach((val) => {
        if (val === video[0].id) {
          setIsInWatchLater(true);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [watchLater]);

  const likeHandler = (video) => {
    if (!user) {
      setOpenModal(true);
      setAlert("Please Log in to continue");
      return;
    }
    addToLiked(user.uid, video);
  };

  const dislikeHandler = (video) => {
    removeFromLiked(user.uid, video);
    setIsLiked(false);
  };

  const watchLaterHandler = (video) => {
    if (!user) {
      setOpenModal(true);
      setAlert("Please Log in to continue");
      return;
    }
    addToWatchList(user.uid, video);
  };

  const removeWatchLaterHandler = (video) => {
    removeFromWatchlist(user.uid, video);
    setIsInWatchLater(false);
  };

  return (
    <>
      {openModal &&
        ReactDOM.createPortal(
          <AlertModal setOpenModal={setOpenModal} alert={alert} />,
          document.getElementById("overlay-root")
        )}
      <div className="video-container">
        {video.map((vid) => {
          return (
            <div style={{ height: "100%", width: "100%" }} key={vid.id}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${vid.ytVideoID}`}
                controls={true}
                width="100%"
                height="70%"
              />
              <h1>{vid.title}</h1>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{vid["date-added"]}</div>
                <div>
                  {!isLiked ? (
                    <span
                      className="like-button"
                      onClick={() => {
                        likeHandler(vid);
                      }}
                    >
                      Like
                    </span>
                  ) : (
                    <span
                      className="liked-button"
                      onClick={() => {
                        dislikeHandler(vid);
                      }}
                    >
                      Liked
                    </span>
                  )}

                  {!isInWatchLater ? (
                    <span
                      className="like-button"
                      onClick={() => {
                        watchLaterHandler(vid);
                      }}
                    >
                      Watch Later
                    </span>
                  ) : (
                    <span
                      className="liked-button"
                      onClick={() => {
                        removeWatchLaterHandler(vid);
                      }}
                    >
                      Added to WatchLater
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VideoPage;
