import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import { useState } from "react";
// import ReactPlayer from "react-player/lazy";
import Home from "./components/pages/Home";
import PlayLists from "./components/pages/Playlists";
import Liked from "./components/pages/Liked";
import WatchLater from "./components/pages/WatchLater";
import History from "./components/pages/History";

function App() {
  const [tabIndex, setTabIndex] = useState(1);

  const tabChangeHandler = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="App">
      <Header />
      <SideBar tabIndex={tabIndex} tabChangeHandler={tabChangeHandler} />
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=1004gyjLhkA"
        controls="true"
      /> */}
      <div className="pages">
        {tabIndex === 1 && <Home />}
        {tabIndex === 2 && <PlayLists />}
        {tabIndex === 3 && <Liked />}
        {tabIndex === 4 && <WatchLater />}
        {tabIndex === 5 && <History />}
      </div>
    </div>
  );
}

export default App;
