import { useState } from "react"

import Input from "../Input/Input"
import Button from "../Button/Button"

import styles from "./LoginForm.module.css"

function LoginForm() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setisValid] = useState(false)

  // console.log(id, password);
  const isValidateForm = (id, password) => {
    console.log(id.length && password.length ? "적절" : "부적절")
    return id.length && password.length >= 6
  }

  const idInputHandler = (evt) => {
    const newId = evt.target.value
    setId(newId)
    setisValid(isValidateForm(newId, password))
  }

  const passwordInputHandler = (evt) => {
    const newPassword = evt.target.value
    setPassword(newPassword)
    setisValid(isValidateForm(id, newPassword))
  }

  const submitHandler = (evt) => {
    evt.preventDefault()
    if(!isValid) { // 부적절한 형식일경우 리턴
      return
    }
    // 적절한 형식일경우 로그인요청
    console.log("적절해요 로그인 요청할게요")
    console.log(id, password);
    // console.log('submit!!');
  }

  const signupHandler = () => {
    console.log("회원가입 요청할게요");
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Instagram</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={`${styles.field} ${styles.inputField}`}>
          <Input placeholder={"전화번호, 사용자 이름 또는 이메일"} handler={idInputHandler} value = {id}/>
          <Input type="password" placeholder={"비밀번호"} handler={passwordInputHandler} value = {password}/>
        </div>
        <div className={`${styles.field} ${styles.buttonField}`}>
          <Button text="로그인" type="submit" disabled = {!isValid}/>
          <Button text="회원가입" type="button" handler={signupHandler}/>
        </div>
      </form>
    </div>    
  )
}
export default LoginForm