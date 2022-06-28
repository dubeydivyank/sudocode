import "./SideBar.css";

const SideBar = ({ tabIndex, tabChangeHandler }) => {
  return (
    <div className="sidebar--container">
      <div
        className={tabIndex === 1 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(1);
        }}
      >
        Home
      </div>
      <div
        className={tabIndex === 2 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(2);
        }}
      >
        Playlists
      </div>
      <div
        className={tabIndex === 3 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(3);
        }}
      >
        Liked
      </div>
      <div
        className={tabIndex === 4 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(4);
        }}
      >
        Watch Later
      </div>
      <div
        className={tabIndex === 5 ? "tab active-tab" : "tab"}
        onClick={() => {
          tabChangeHandler(5);
        }}
      >
        History
      </div>
    </div>
  );
};

export default SideBar;
