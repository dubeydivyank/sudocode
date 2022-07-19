import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { db } from "../firebase";
import { ref, onValue, update, remove } from "firebase/database";
import { useAuthContext } from "./AuthContext";

const dbContext = createContext();

const DbContextProvider = ({ children }) => {
  const { user } = useAuthContext();

  const [videos, setVideos] = useState([]);
  const [liked, setLiked] = useState({});
  const [watchLater, setWatchLater] = useState({});

  useEffect(() => {
    const videoRef = ref(db, "videos/");
    onValue(videoRef, (snapshot) => {
      const data = snapshot.val();
      setVideos(data);
    });
  }, []);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      const likedRef = ref(db, "users/" + uid + "/liked");
      onValue(likedRef, (snapshot) => {
        const data = snapshot.val();
        setLiked(data);
      });
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      const watchLaterRef = ref(db, "users/" + uid + "/watchlist");
      onValue(watchLaterRef, (snapshot) => {
        const data = snapshot.val();
        setWatchLater(data);
      });
    }
  }, [user]);

  const addToLiked = (uid, video) => {
    const newVideoKey = video.id;
    update(ref(db, "users/" + uid + "/liked"), { [newVideoKey]: video });
  };

  const removeFromLiked = (uid, video) => {
    const removeId = video.id;
    remove(ref(db, "users/" + uid + "/liked/" + removeId));
  };

  const addToWatchList = (uid, video) => {
    const newVideoKey = video.id;
    update(ref(db, "users/" + uid + "/watchlist"), { [newVideoKey]: video });
  };

  const removeFromWatchlist = (uid, video) => {
    const removeId = video.id;
    remove(ref(db, "users/" + uid + "/watchlist/" + removeId));
  };

  return (
    <dbContext.Provider
      value={{
        videos,
        liked,
        watchLater,
        setVideos,
        addToWatchList,
        removeFromWatchlist,
        addToLiked,
        removeFromLiked,
      }}
    >
      {children}
    </dbContext.Provider>
  );
};

const useDbContext = () => {
  const context = useContext(dbContext);
  if (!context) {
    throw new Error("dbContext not found: check useDbContext hook");
  }
  return context;
};

export { DbContextProvider, useDbContext };
