import "./Header.css";
import { useState } from "react";
// import moon from "../../svg/moon.svg";
// import sun from "../../svg/sun.svg";
import logout from "../../svg/logout.svg";
import user from "../../svg/user.svg";
import Modal from "../modal/Modal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="header--container">
      <div id="logo">sudoCode</div>
      <div id="search-bar">
        <input type="text" placeholder="search" />
      </div>
      <div className="header--buttons">
        <span id="login-logout">
          {userLoggedIn ? (
            <img src={logout} alt="user-icon" />
          ) : (
            <img src={user} alt="user-icon" onClick={modalHandler} />
          )}
        </span>
      </div>
      {modalOpen && <Modal />}
    </div>
  );
};

export default Header;
