import { useDbContext } from "../context/DbContext";

const Playlists = () => {
  const { videos } = useDbContext();

  return (
    <>
      <div>
        {videos.map((video) => {
          return <div>{video.title}</div>;
        })}
      </div>
      <div>PlayLists</div>
    </>
  );
};

export default Playlists;
