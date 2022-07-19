import data from "../data.json";
import { useAuthContext } from "../context/AuthContext";
import { useDbContext } from "../context/DbContext";
import { Link } from "react-router-dom";
import trash from "../assets/svg/trash.svg";

const Liked = () => {
  const { liked, removeFromLiked } = useDbContext();
  const { user } = useAuthContext();
  console.log(liked);
  return (
    <>
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
              <div>{video.title}</div>
              <div>{video["date-added"]}</div>
              <img
                src={trash}
                alt="x"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  removeFromLiked(user.uid, video);
                }}
              />
            </div>
          );
        })}
      </div>
      {!user ? <div>not logged in</div> : <div>logged in</div>}
    </>
  );
};

export default Liked;
