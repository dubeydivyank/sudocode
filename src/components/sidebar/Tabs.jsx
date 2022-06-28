// import "./Tabs.css";

const Tabs = ({ tabIndex, toggleTab }) => {
  return (
    <>
      <div
        className={tabIndex === 1 ? "tab active-tab" : "tab"}
        onClick={() => {
          toggleTab(1);
        }}
      >
        Home
      </div>
      <div
        className={tabIndex === 2 ? "tab active-tab" : "tab"}
        onClick={() => {
          toggleTab(2);
        }}
      >
        Playlists
      </div>
      <div
        className={tabIndex === 3 ? "tab active-tab" : "tab"}
        onClick={() => {
          toggleTab(3);
        }}
      >
        Liked
      </div>
      <div
        className={tabIndex === 4 ? "tab active-tab" : "tab"}
        onClick={() => {
          toggleTab(4);
        }}
      >
        Watch Later
      </div>
      <div
        className={tabIndex === 5 ? "tab active-tab" : "tab"}
        onClick={() => {
          toggleTab(5);
        }}
      >
        History
      </div>
    </>
  );
};

export default Tabs;
