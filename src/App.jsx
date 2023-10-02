import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import "./components/App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default App;
