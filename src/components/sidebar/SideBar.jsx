import { useState } from "react";
import "./SideBar.css";
import Tabs from "./Tabs";

const SideBar = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const toggleTab = (index) => {
    setTabIndex(index);
  };
  return (
    <>
      <div className="sidebar--container">
        <Tabs tabIndex={tabIndex} toggleTab={toggleTab} />
      </div>
    </>
  );
};

export default SideBar;
