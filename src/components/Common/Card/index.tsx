import React from "react";
import styles from "./styles.module.scss";

interface PropType {
  img: string;
  title: string;
  discountedRate: number;
  actualRate: number;
}

const Card: React.FC<PropType> = ({
  actualRate,
  discountedRate,
  title,
  img,
}) => {
  return (
    <div className={styles.container}>
      <img src={img} alt="product" className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
      <p>
        <s>${actualRate}</s> {"  "}&nbsp;${discountedRate}
      </p>
    </div>
  );
};

export default Card;
