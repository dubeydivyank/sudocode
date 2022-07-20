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

const Header = () => {
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
    <div className="header--container">
      <div id="logo">sudoCode</div>

      <div id="search-bar">
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
          <Modal setModalOpen={setModalOpen} />,
          document.getElementById("overlay-root")
        )}
    </div>
  );
};

export default Header;
