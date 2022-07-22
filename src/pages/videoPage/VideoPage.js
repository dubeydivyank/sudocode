import React from "react";
import ReactPlayer from "react-player/youtube";
import data from "../../data.json";
import "./VideoPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useDbContext } from "../../context/DbContext";
import ReactDOM from "react-dom";
import AlertModal from "../../components/modal/AlertModal";
import likedIcon from "../../assets/svg/liked.svg";
import watchLaterIcon from "../../assets/svg/watch-later.svg";

const VideoPage = () => {
  //Context
  const {
    videoList,
    liked,
    watchLater,
    addToLiked,
    removeFromLiked,
    addToWatchList,
    removeFromWatchlist,
  } = useDbContext();
  const { user } = useAuthContext();

  const [isLiked, setIsLiked] = useState(false);
  const [isInWatchLater, setIsInWatchLater] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [alert, setAlert] = useState("");

  //get video using video id in URL

  const { videoId } = useParams();
  const video = data.videos.filter((vid) => {
    return vid.ytVideoID === videoId;
  });

  // const video = videoList.forEach((vid) => {
  //   if (vid.ytVideoID === videoId) {
  //     return [vid];
  //   }
  // });

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

      {video.map((vid) => {
        return (
          <div id="video-page-container" key={vid.id}>
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${vid.ytVideoID}`}
              controls={true}
              width="auto"
              height="auto"
            />

            <h2>{vid.title}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  color: "var(--font-color-date)",
                  marginTop: "0.5rem",
                }}
              >
                {vid["date-added"]}
              </div>
              <div>
                {!isLiked ? (
                  <span
                    className="like-button"
                    onClick={() => {
                      likeHandler(vid);
                    }}
                  >
                    <img src={likedIcon} alt="" />
                    Like
                  </span>
                ) : (
                  <span
                    className="liked-button"
                    onClick={() => {
                      dislikeHandler(vid);
                    }}
                  >
                    <img src={likedIcon} alt="" />
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
                    <img src={watchLaterIcon} alt="" />
                    Watch Later
                  </span>
                ) : (
                  <span
                    className="liked-button"
                    onClick={() => {
                      removeWatchLaterHandler(vid);
                    }}
                  >
                    <img src={watchLaterIcon} alt="" />
                    Added to WatchLater
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VideoPage;
