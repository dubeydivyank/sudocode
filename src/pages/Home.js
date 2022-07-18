import "./Home.css";
import { Link } from "react-router-dom";
import { useDbContext } from "../context/DbContext";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import AlertModal from "../components/modal/AlertModal";
import ReactDOM from "react-dom";

const Home = () => {
  const { videos, setVideos } = useDbContext();
  const { user } = useAuthContext();
  const [openModal, setOpenModal] = useState(false);
  const [alert, setAlert] = useState("");

  const olderFirstSortHandler = () => {
    const sortedArray = videos.sort((a, b) => {
      return a.id - b.id;
    });
    setVideos([...sortedArray]);
  };

  const newerFirstSortHandler = () => {
    const sortedArray = videos.sort((a, b) => {
      return b.id - a.id;
    });
    setVideos([...sortedArray]);
  };

  let likedVideo = [];
  const addToLiked = (videoID) => {
    if (!user) {
      setOpenModal(true);
      setAlert("Please Log in to continue");
      return;
    }

    const clickedVideo = videos.filter((vid) => {
      return vid.ytVideoID === videoID;
    });

    likedVideo.push(clickedVideo[0]);

    console.log(likedVideo);
  };

  return (
    <>
      {openModal &&
        ReactDOM.createPortal(
          <AlertModal setOpenModal={setOpenModal} alert={alert} />,
          document.getElementById("overlay-root")
        )}
      <button onClick={olderFirstSortHandler}>oldest first</button>
      <button onClick={newerFirstSortHandler}>newest first</button>

      <div className="cards-container">
        {videos.map((video) => {
          return (
            <div className="video-card" key={video.id} id={video.ytVideoID}>
              <Link to={`/video/${video.ytVideoID}`}>
                <img
                  className="thumbnail"
                  src={`https://img.youtube.com/vi/${video.ytVideoID}/maxresdefault.jpg`}
                  alt=""
                ></img>
              </Link>
              <div>{video.title}</div>
              <div>{video["date-added"]}</div>
              <button
                onClick={(e) => {
                  addToLiked(e.target.parentNode.id);
                }}
              >
                like
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;