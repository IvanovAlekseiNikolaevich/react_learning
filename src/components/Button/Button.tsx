import styles from './Button.module.css'

interface ButtonProps {
  buttonText: string
  onClick: () => void
  color?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
}
const Button = ({ buttonText, onClick, color = 'primary', disabled }: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={[styles.btn, styles.btnSecondary].join(' ')}
        onClick={onClick}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  )
}
export default Button
