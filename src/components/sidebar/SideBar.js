import "./SideBar.css";
import home from "../../svg/home.svg";
import playlist from "../../svg/playlist.svg";
import liked from "../../svg/liked.svg";
import watchLater from "../../svg/watch-later.svg";
import history from "../../svg/history.svg";

const SideBar = ({ tabIndex, tabChangeHandler }) => {
  return (
    <div className="sidebar--container">
      <div
        className={tabIndex === 1 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(1);
        }}
      >
        <img src={home} alt="home-icon" />
        Home
      </div>
      <div
        className={tabIndex === 2 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(2);
        }}
      >
        <img src={playlist} alt="playlist-icon" />
        Playlists
      </div>
      <div
        className={tabIndex === 3 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(3);
        }}
      >
        <img src={liked} alt="liked-icon" />
        Liked
      </div>
      <div
        className={tabIndex === 4 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(4);
        }}
      >
        <img src={watchLater} alt="watchlater-icon" />
        Watch Later
      </div>
      <div
        className={tabIndex === 5 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(5);
        }}
      >
        <img src={history} alt="history-icon" />
        History
      </div>
    </div>
  );
};

export default SideBar;
