import styles from "./Button.module.css"

function Button({ type = "button", style = "default", text, handler, disabled }) {
  return (
    <button className={`${styles.buttons} ${styles[style]}`} type={type} onClick={handler} disabled={disabled}>{text}</button>
  )
}

export default Button