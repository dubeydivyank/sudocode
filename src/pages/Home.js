// import data from "../data.json";
import "./Home.css";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
import { useDbContext } from "../context/DbContext";

const Home = () => {
  const { videos, setVideos } = useDbContext();

  const ascendingSortHandler = () => {
    const sortedArray = videos.sort((a, b) => {
      return a.id - b.id;
    });
    setVideos([...sortedArray]);
  };

  const descendingSortHandler = () => {
    const sortedArray = videos.sort((a, b) => {
      return b.id - a.id;
    });
    setVideos([...sortedArray]);
  };

  return (
    <>
      <button onClick={ascendingSortHandler}>oldest first</button>
      <button onClick={descendingSortHandler}>newest first</button>

      <div className="cards-container">
        {videos.map((video) => {
          return (
            <div className="video-card" key={video.id}>
              <Link to={`/video/${video.ytVideoID}`}>
                <img
                  className="thumbnail"
                  src={`https://img.youtube.com/vi/${video.ytVideoID}/maxresdefault.jpg`}
                  alt=""
                ></img>
              </Link>
              <div>{video.title}</div>
              <div>{video["date-added"]}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
