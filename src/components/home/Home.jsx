import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import ScrollButton from "../ScrollButton/ScrollButton";

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <span>
          <Link to="../shop" className={styles.homeLink}>
            Shop Now
          </Link>
        </span>
      </div>
      <p className={styles.attribution}>Photo by Joshua Chun</p>
      <ScrollButton />
    </>
  );
};

export default Home;
