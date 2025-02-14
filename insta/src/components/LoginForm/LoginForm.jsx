import Input from "../Input/Input"
import Button from "../Button/Button"

import styles from "./LoginForm.module.css"

function LoginForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Instagram</h2>
      <form action="" className={styles.form}>
        <div className={`${styles.field} ${styles.inputField}`}>
          <Input type="text" placeholder={"전화번호, 사용자 이름 또는 이메일"}/>
          <Input type="password" placeholder={"비밀번호"}/>
        </div>
        <div className={`${styles.field} ${styles.buttonField}`}>
          <Button text="로그인" type="submit"/>
          <Button text="회원가입" type="button"/>
        </div>
      </form>
    </div>    
  )
}
export default LoginForm