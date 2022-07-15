import { createContext, useContext, useState } from "react";

const videoContext = createContext();

export function VideoContextProvider({ children }) {
  const [video, setVideo] = useState({});
  return (
    <videoContext.Provider value={{ video, setVideo }}>
      {children}
    </videoContext.Provider>
  );
}

export function useVideoContext() {
  const userVideoContext = useContext(videoContext);
  if (!userVideoContext) {
    throw new Error("Something is wrong in videoContext");
  }
  return userVideoContext;
}

// export { VideoContextProvider, useVideoContext };
