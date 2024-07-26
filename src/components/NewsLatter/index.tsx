import styles from "./styles.module.scss";
const NewsLatter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h4>SIGN UP SPECIAL PROMOTIONS</h4>
        <p>
          Get exclusive deals you won’t find anywhere else straight to your
          inbox!
        </p>
        <div>
          <input type="text" placeholder="Enter email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
