import { useState } from "react";
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      setVisible(true);
    } else if (scrolled <= 10) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className={styles.scrollButton}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    >
      &uarr;
    </button>
  );
};

export default ScrollButton;
