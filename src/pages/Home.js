import "./Home.css";
import { Link } from "react-router-dom";
import { useDbContext } from "../context/DbContext";

const Home = () => {
  const { videoList, setVideoList } = useDbContext();

  const olderFirstSortHandler = () => {
    const sortedArray = videoList.sort((a, b) => {
      return a.id - b.id;
    });
    setVideoList([...sortedArray]);
  };

  const newerFirstSortHandler = () => {
    const sortedArray = videoList.sort((a, b) => {
      return b.id - a.id;
    });
    setVideoList([...sortedArray]);
  };

  return (
    <>
      <button onClick={olderFirstSortHandler}>oldest first</button>
      <button onClick={newerFirstSortHandler}>newest first</button>

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
