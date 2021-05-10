import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  className?: string; 
  onClick?: () => void;
  children: ReactNode
}

const Button: React.VFC<Props> = ({ className, onClick, children }) => {
  return (
    <button 
      className={`${styles['button']} ${className}`}
      onClick={(event) => {
        event.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
};

export { Button };