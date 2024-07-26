import logo from "../../assets/logo.png";
import styles from "./style.module.scss";
const Footer = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" />
    </div>
  );
};
export default Footer;
