import data from "../../data.json";
import "./Home.css";
import { Link } from "react-router-dom";
// import ReactPlayer from "react-player/lazy";

const Home = () => {
  return (
    <div className="cards-container">
      {data.videos.map((video) => {
        return (
          <div className="video-card" key={video.id}>
            <Link to={`/video/${video.thumbnail}`}>
              <img
                className="thumbnail"
                src={`https://img.youtube.com/vi/${video.thumbnail}/maxresdefault.jpg`}
              ></img>
            </Link>
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
