import styles from "./styles.module.scss";
const NewsLatter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h4>SIGN UP SPECIAL PROMOTIONS</h4>
        <p>
          Get exclusive deals you won&apos;t find anywhere else straight to your
          inbox!
        </p>
        <div className="flex w-full md:w-2/4 flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 mr-0"
          />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
