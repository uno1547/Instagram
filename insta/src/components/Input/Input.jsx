import styles from "./Input.module.css"

function Input({ type = "text", placeholder, handler, value }) {
  return (
    <input className={styles.input} type={type} placeholder = {placeholder} value={value} onChange = {handler}/>
  )
}

export default Input