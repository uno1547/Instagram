import styles from "./Button.module.css"

function Button({ type = "button", text }) {
  return (
    <button className={styles.buttons} type={type}>{text}</button>
  )
}

export default Button