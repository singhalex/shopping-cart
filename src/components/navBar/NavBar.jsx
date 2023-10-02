import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navBar">
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
