import React, { ReactNode } from "react";
import styles from "./style.module.scss";
interface PropType {
  children: ReactNode;
}

export const Container: React.FC<PropType> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
