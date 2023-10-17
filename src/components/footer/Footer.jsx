import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <p>555 East St</p>
        <p>Ste. 105</p>
        <p>East London</p>
      </div>
      <div>
        <p>F.A.Q.</p>
        <p>Shipping & Returns</p>
        <p>Payment Options</p>
      </div>
    </footer>
  );
};

export default Footer;
