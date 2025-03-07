import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Input from "../Input/Input"
import Button from "../Button/Button"

import styles from "./LoginForm.module.css"

const LoginForm = ({ setUserID }) => {
  const [userValue, setuserValue] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setisValid] = useState(false)
  const [alert, setAlert] = useState("")

  const navigate = useNavigate()

  const isValidateForm = (userValue, password) => {
    return userValue.length && password.length >= 6
  }

  const userValueInputHandler = (evt) => {
    const newUserValue = evt.target.value
    setuserValue(newUserValue)
    setisValid(isValidateForm(newUserValue, password))
  }

  const passwordInputHandler = (evt) => {
    const newPassword = evt.target.value
    setPassword(newPassword)
    setisValid(isValidateForm(userValue, newPassword))
  }

  const submitHandler = async (evt) => {
    evt.preventDefault()
    if(!isValid) { // 부적절한 형식일경우 리턴
      return
    }

    const form = evt.target
    const formData = new FormData(form)
    const entry = Object.fromEntries(formData)
    const json = JSON.stringify(entry)

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : json
      })

      if(!response.ok) { //정상이라면
        const { message } = await response.json()
        setAlert(message)
        return
      }

      const { message, accessToken } = await response.json()
      localStorage.setItem('access_token', accessToken)
      setAlert(message) // 얘땜에 리랜더링이 발생하는건가??

      await setUserID()
      navigate("/") 

    } catch (error) {
      setAlert("알수없는 오류에요")
    }
  }

  const signupHandler = () => {
    navigate('/signup')
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Instagram</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={`${styles.field} ${styles.inputField}`}>
          <Input name = "userValue"  placeholder={"전화번호, 사용자 이름 또는 이메일"} handler={userValueInputHandler} value = {userValue}/>
          <Input name = "password"  type="password" placeholder={"비밀번호"} handler={passwordInputHandler} value = {password}/>
        </div>
        <div className={`${styles.field} ${styles.buttonField}`}>
          <Button text="로그인" type="submit" disabled = {!isValid}/>
          <Button text="회원가입" type="button" handler={signupHandler}/>
          <div className={styles.notice}>{alert}</div>
        </div>
      </form>
    </div>    
  )
}
export default LoginForm