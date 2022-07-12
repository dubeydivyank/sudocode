import data from "../../data.json";
import "./Home.css";

import ReactPlayer from "react-player/lazy";

const Home = () => {
  return (
    <div className="cards-container">
      {data.videos.map((video) => {
        return (
          <div className="video-card">
            <img
              className="thumbnail"
              src={`https://i.ytimg.com/vi/${video.thumbnail}/0.jpg`}
            ></img>
            {/* <ReactPlayer url={video.url} controls="true" /> */}
            <div>{video.title}</div>
            <div>{video["date-added"]}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
