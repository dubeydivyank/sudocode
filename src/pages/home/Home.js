import { useState } from "react";
import { Link } from "react-router-dom";
import { useDbContext } from "../../context/DbContext";
import "./Home.css";
import sortup from "../../assets/svg/sortup.svg";
import sortdown from "../../assets/svg/sortdown.svg";

const Home = () => {
  const { videoList, setVideoList } = useDbContext();
  const [highlightOldestFirstButton, setHighlightOldestFirstButton] =
    useState(true);

  const olderFirstSortHandler = () => {
    setHighlightOldestFirstButton(true);
    const sortedArray = videoList.sort((a, b) => {
      return a.id - b.id;
    });
    setVideoList([...sortedArray]);
  };

  const newerFirstSortHandler = () => {
    setHighlightOldestFirstButton(false);
    const sortedArray = videoList.sort((a, b) => {
      return b.id - a.id;
    });
    setVideoList([...sortedArray]);
  };

  const addToBrowserHistory = (video) => {
    const browserHistory = JSON.parse(localStorage.getItem("history"));
    if (browserHistory) {
      localStorage.setItem(
        "history",
        JSON.stringify([...browserHistory, video])
      );
    } else {
      localStorage.setItem("history", JSON.stringify([video]));
    }
  };

  return (
    <>
      <div id="sort-buttons">
        <button
          onClick={olderFirstSortHandler}
          className={
            highlightOldestFirstButton
              ? "sort-button sort-button-selected"
              : "sort-button"
          }
        >
          <img src={sortdown} />
          Sort Oldest
        </button>
        <button
          onClick={newerFirstSortHandler}
          className={
            !highlightOldestFirstButton
              ? "sort-button sort-button-selected"
              : "sort-button"
          }
        >
          <img src={sortup} />
          Sort Latest
        </button>
      </div>
      <div className="cards-container">
        {videoList.map((video) => {
          return (
            <div className="video-card" key={video.id} id={video.ytVideoID}>
              <Link to={`/video/${video.ytVideoID}`}>
                <img
                  className="thumbnail"
                  src={`https://img.youtube.com/vi/${video.ytVideoID}/maxresdefault.jpg`}
                  alt=""
                  onClick={() => {
                    addToBrowserHistory(video);
                  }}
                ></img>
              </Link>
              <div className="video-description">
                <div>{video.title}</div>
                <div className="video-date">{video["date-added"]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
