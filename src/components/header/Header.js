import "./Header.css";
import { useState } from "react";
import login from "../../svg/login.svg";
import userIcon from "../../svg/user.svg";
import Modal from "../modal/Modal";
import ReactDOM from "react-dom";
import { useAuthContext } from "../../context/AuthContext";

// const Header = ({ user }) => {
const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [userLoggedIn, setUserLoggedIn] = useState(false);
  const { user } = useAuthContext();

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
      {/* {modalOpen && <Modal user={user} setModalOpen={setModalOpen} />} */}
      {modalOpen &&
        ReactDOM.createPortal(
          <Modal setModalOpen={setModalOpen} />,
          document.getElementById("overlay-root")
        )}
    </div>
  );
};

export default Header;
