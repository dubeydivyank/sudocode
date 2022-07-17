import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { db } from "../firebase";
import { set, ref, onValue } from "firebase/database";

const dbContext = createContext();

const DbContextProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videoRef = ref(db, "videos/");
    onValue(videoRef, (snapshot) => {
      const data = snapshot.val();
      setVideos(data);
    });
  }, []);

  const addToLiked = () => {};
  const addToWatchList = () => {};
  const removeFromLiked = () => {};
  const removeFromWatchlist = () => {};

  return (
    <dbContext.Provider value={{ videos, setVideos }}>
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
