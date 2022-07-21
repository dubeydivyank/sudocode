import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDbContext } from "../context/DbContext";
import sortup from "../assets/svg/sortup.svg";
import sortdown from "../assets/svg/sortdown.svg";

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
