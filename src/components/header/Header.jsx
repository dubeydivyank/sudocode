import "./Header.css";

const Header = () => {
  return (
    <div className="header--container">
      <div id="logo">sudoCode</div>
      <div id="search-bar">
        <input type="text" />
      </div>
      <div>theme-toggle</div>
    </div>
  );
};

export default Header;
