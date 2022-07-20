import { AuthContextProvider } from "./context/AuthContext";
import { DbContextProvider } from "./context/DbContext";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/Home";
import PlayLists from "./pages/Playlists";
import Liked from "./pages/Liked";
import WatchLater from "./pages/WatchLater";
import History from "./pages/History";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <AuthContextProvider>
      <DbContextProvider>
        <div className="App">
          <Header />
          <SideBar />

          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/playlists" element={<PlayLists />} />
              <Route path="/liked" element={<Liked />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="/history" element={<History />} />
              <Route path="/video/:videoId" element={<VideoPage />} />
            </Routes>
          </div>
        </div>
      </DbContextProvider>
    </AuthContextProvider>
  );
}

export default App;
