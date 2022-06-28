import "./App.css";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
// import ReactPlayer from "react-player/lazy";

function App() {
  return (
    <div className="App">
      <Header />
      <SideBar />
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=1004gyjLhkA"
        controls="true"
      /> */}
    </div>
  );
}

export default App;
