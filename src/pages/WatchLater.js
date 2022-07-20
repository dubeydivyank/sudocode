import { useAuthContext } from "../context/AuthContext";
import { useDbContext } from "../context/DbContext";
import { Link } from "react-router-dom";
import trash from "../assets/svg/trash.svg";

const WatchLater = () => {
  const { watchLater, removeFromWatchlist } = useDbContext();
  const { user } = useAuthContext();
  return (
    <>
      {!user && <div>Login to see liked videos. </div>}
      {watchLater ? (
        <div className="cards-container">
          {Object.values(watchLater).map((video) => {
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

                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div className="video-date">{video["date-added"]}</div>
                    <div className="delete-icon">
                      <img
                        src={trash}
                        alt="x"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          removeFromWatchlist(user.uid, video);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Looks like you haven't added anything yet. </div>
      )}
    </>
  );
};

export default WatchLater;
