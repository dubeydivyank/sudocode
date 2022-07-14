import { AuthContextProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Home from "./components/pages/Home";
import PlayLists from "./components/pages/Playlists";
import Liked from "./components/pages/Liked";
import WatchLater from "./components/pages/WatchLater";
import History from "./components/pages/History";

function App() {
  return (
    <AuthContextProvider>
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
          </Routes>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
