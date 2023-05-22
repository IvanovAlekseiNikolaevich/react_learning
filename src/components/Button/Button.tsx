import styles from "./Button.module.css";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ buttonText, onClick, color = "primary" }: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles.btnSecondary].join(" ")}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
export default Button;
