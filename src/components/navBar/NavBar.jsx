import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

const NavBar = ({ total }) => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.siteTitle}>The Store</h1>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">
            ( {total.numItems} )
            <img className={styles.cartIcon} src="/shopping-cart.png"></img>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Validate props
NavBar.propTypes = {
  total: PropTypes.object,
};

export default NavBar;
