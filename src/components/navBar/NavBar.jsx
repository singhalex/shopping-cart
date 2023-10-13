import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const NavBar = ({ total }) => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNavBar = () => {
    console.log("click");
    setShowNav(!showNav);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1 className={styles.siteTitle}>The Store</h1>
        </div>
        <div className={styles.menuIcon} onClick={handleShowNavBar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${styles.navElements} ${showNav && styles.active}`}>
          <ul>
            <li>
              <NavLink to="home" onClick={handleShowNavBar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="shop" onClick={handleShowNavBar}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="cart" onClick={handleShowNavBar}>
                <div className={styles.cart}>
                  ( {total.numItems} )
                  <img
                    className={styles.cartIcon}
                    src="/shopping-cart.png"
                  ></img>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Validate props
NavBar.propTypes = {
  total: PropTypes.object,
};

export default NavBar;
