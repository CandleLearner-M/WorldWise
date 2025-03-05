import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  type: "primary" | "back" | "position";
  onClick?: (e: React.FormEvent) => void;
  isSubmitBtn?: boolean;
}

export default function Button({
  children,
  onClick,
  type,
  isSubmitBtn = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
      type={isSubmitBtn ? "submit" : "button"}
    >
      {children}
    </button>
  );
}
