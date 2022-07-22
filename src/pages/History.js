import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import trashIcon from "../assets/svg/trash.svg";
import { useNavigate } from "react-router-dom";
import "./History.css";

const History = () => {
  const [history, setHistory] = useState();

  useEffect(() => {
    const videoInHistory = JSON.parse(localStorage.getItem("history"));
    if (videoInHistory) {
      setHistory(videoInHistory);
    }
  }, []);

  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  let navigate = useNavigate();
  const redirectToHome = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <>
      {history && (
        <div className="clear-history-button" onClick={clearHistory}>
          <img src={trashIcon} alt="" />
          Clear History
        </div>
      )}
      {history ? (
        <div className="cards-container">
          {history.map((video) => {
            return (
              <div
                className="video-card"
                key={Math.random()}
                id={video.ytVideoID}
              >
                <Link to={`/video/${video.ytVideoID}`}>
                  <img
                    className="thumbnail"
                    src={`https://img.youtube.com/vi/${video.ytVideoID}/maxresdefault.jpg`}
                    alt=""
                  ></img>
                </Link>
                <div className="video-description">
                  <div>{video.title}</div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="video-date">{video["date-added"]}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="login-to-continue">
          <div>Looks like you haven't watched anything yet!</div>
          <div id="redirect-button" onClick={redirectToHome}>
            Start Watching now!
          </div>
        </div>
      )}
    </>
  );
};

export default History;
