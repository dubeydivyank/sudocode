import { useAuthContext } from "../context/AuthContext";
import { useDbContext } from "../context/DbContext";
import { Link } from "react-router-dom";
import trash from "../assets/svg/trash.svg";

const Liked = () => {
  const { liked, removeFromLiked } = useDbContext();
  const { user } = useAuthContext();

  return (
    <>
      {liked ? (
        <div className="cards-container">
          {Object.values(liked).map((video) => {
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

                  <span className="video-date">{video["date-added"]}</span>
                  <img
                    src={trash}
                    alt="x"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      removeFromLiked(user.uid, video);
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>add to liked</div>
      )}
      {/* {!user ? <div>not logged in</div> : <div>logged in</div>} */}
    </>
  );
};

export default Liked;
