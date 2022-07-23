import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";
import home from "../../assets/svg/home.svg";
import playlist from "../../assets/svg/playlist.svg";
import liked from "../../assets/svg/liked.svg";
import watchLater from "../../assets/svg/watch-later.svg";
import history from "../../assets/svg/history.svg";

const SideBar = ({ sideDrawer, setSideDrawer }) => {
  const [tabIndex, setTabIndex] = useState(1);

  const tabChangeHandler = (index) => {
    setTabIndex(index);
  };

  const currLoc = useLocation();
  useEffect(() => {
    switch (currLoc.pathname) {
      case "/playlists":
        setTabIndex(2);
        return;
      case "/liked":
        setTabIndex(3);
        return;
      case "/watchlater":
        setTabIndex(4);
        return;
      case "/history":
        setTabIndex(5);
        return;
      default:
        setTabIndex(1);
        return;
    }
  }, [currLoc]);

  return (
    <div
      className={`sidebar--container ${sideDrawer ? "trans-on" : "trans-off"}`}
      onClick={() => {
        setSideDrawer(!sideDrawer);
      }}
    >
      <Link
        to={"/"}
        className={tabIndex === 1 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(1);
        }}
      >
        <img src={home} alt="home-icon" />
        Home
      </Link>

      <Link
        to={"/playlists"}
        className={tabIndex === 2 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(2);
        }}
      >
        <img src={playlist} alt="playlist-icon" />
        Playlists
      </Link>
      <Link
        to={"/liked"}
        className={tabIndex === 3 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(3);
        }}
      >
        <img src={liked} alt="liked-icon" />
        Liked
      </Link>
      <Link
        to={"/watchlater"}
        className={tabIndex === 4 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(4);
        }}
      >
        <img src={watchLater} alt="watchlater-icon" />
        Watch Later
      </Link>

      <Link
        to={"/history"}
        className={tabIndex === 5 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(5);
        }}
      >
        <img src={history} alt="history-icon" />
        History
      </Link>
    </div>
  );
};

export default SideBar;
