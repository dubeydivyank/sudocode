import "./Header.css";
import { useState } from "react";
import login from "../../svg/login.svg";
import userIcon from "../../svg/user.svg";
import Modal from "../modal/Modal";

const Header = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState(false);

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
          {user ? (
            <img src={userIcon} alt="user" onClick={modalHandler} />
          ) : (
            <img src={login} alt="login" onClick={modalHandler} />
          )}
        </span>
      </div>
      {modalOpen && <Modal user={user} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Header;
