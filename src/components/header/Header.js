import "./Header.css";
import { useState, useEffect } from "react";
import login from "../../assets/svg/login.svg";
import userIcon from "../../assets/svg/user.svg";
import Modal from "../modal/Modal";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useDbContext } from "../../context/DbContext";
import searchLogo from "../../assets/svg/search.svg";
import menu from "../../assets/svg/menu.svg";

const Backdrop = () => {
  return <div className="backdrop" />;
};

const Header = ({ sideDrawer, setSideDrawer }) => {
  const { user } = useAuthContext();
  const { videos, setVideoList } = useDbContext();
  const [userInput, setUserInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const filter = (input) => {
    const arrayToFilter = videos;
    const filteredArray = arrayToFilter.filter((video) => {
      return video.title.toLocaleLowerCase().includes(input);
    });
    return filteredArray;
  };

  useEffect(() => {
    try {
      const filteredArr = filter(userInput);
      setVideoList(filteredArr);
    } catch (error) {
      console.log("Check setVideoList useEffect: " + error);
    }
  }, [userInput]);

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  let navigate = useNavigate();
  const searchInputSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div style={{ height: "7rem", backgroundColor: "var(--bg-color)" }}>
      <div className="header--container">
        <img
          className="sideDrawer-icon"
          src={menu}
          alt=""
          onClick={() => setSideDrawer(!sideDrawer)}
        />
        <div
          id="logo"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          sudoCode
        </div>

        <div className="search-bar">
          <form onSubmit={searchInputSubmitHandler}>
            <input
              type="text"
              placeholder="search"
              value={userInput}
              onChange={inputChangeHandler}
            />
          </form>
          <img src={searchLogo} alt="" onClick={searchInputSubmitHandler} />
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
        {modalOpen &&
          ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById("backdrop-root")
          )}

        {modalOpen &&
          ReactDOM.createPortal(
            <Modal setModalOpen={setModalOpen} />,
            document.getElementById("overlay-root")
          )}
      </div>

      <div className="mob-search-bar">
        <form onSubmit={searchInputSubmitHandler}>
          <input
            type="text"
            placeholder="search"
            value={userInput}
            onChange={inputChangeHandler}
          />
        </form>
        <img src={searchLogo} alt="" onClick={searchInputSubmitHandler} />
      </div>
    </div>
  );
};

export default Header;
