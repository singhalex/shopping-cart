import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oops! This page does not exsist.</h1>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
};

export default ErrorPage;
