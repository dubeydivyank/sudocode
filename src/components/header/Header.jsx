import "./Header.css";
import moon from "../../svg/moon.svg";
import user from "../../svg/user.svg";

const Header = () => {
  return (
    <div className="header--container">
      <div id="logo">sudoCode</div>
      <div id="search-bar">
        <input type="text" />
      </div>
      <div className="header--buttons">
        <span className="theme-toggle">
          {/* theme */}
          <img src={moon} alt="theme-switch" />
        </span>
        <span className="login-signup">
          <img src={user} alt="user-icon" />
        </span>
      </div>
    </div>
  );
};

export default Header;
