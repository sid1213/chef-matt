import Button from "../../Common/Button";
import styles from "./style.module.scss";
const PromotionalBanner = () => {
  return (
    <div className={styles.card}>
      <h3>ONLINE ONLY</h3>
      <hr />
      <p>
        GET 20% OFF YOUR ORDER OF $50 OR MORE. <br /> Use code{" "}
        <strong>“Chef20”</strong>{" "}
      </p>
      <Button className={styles.btn}>Shop Now</Button>
    </div>
  );
};

export default PromotionalBanner;
