import styles from "./styles.module.scss";
interface PropType extends React.HTMLAttributes<HTMLDivElement> {}

const Button: React.FC<PropType> = ({ className, children }) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
};

export default Button;
