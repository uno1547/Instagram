import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

import Input from "../Input/Input"
import Button from "../Button/Button"

import styles from "./LoginForm.module.css"

function LoginForm() {
  const [userValue, setuserValue] = useState("")
  const [password, setPassword] = useState("")
  const [isValid, setisValid] = useState(false)
  const navigate = useNavigate()
  
  // console.log(userName, password);
  const isValidateForm = (userValue, password) => {
    // console.log(userValue.length && password.length ? "적절" : "부적절")
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
    setisValid(isValidateForm(newPassword, newPassword))
  }

  const submitHandler = (evt) => {
    evt.preventDefault()
    if(!isValid) { // 부적절한 형식일경우 리턴
      return
    }
    // 적절한 형식일경우 로그인요청
    // console.log("적절해요 로그인 요청할게요")
    // console.log(userValue, password); // userValue마다 다르게 처리해줘야하는데, 일단은 nickName이라가정
    const form = evt.target
    const formData = new FormData(form)
    const entry = Object.fromEntries(formData)
    const json = JSON.stringify(entry)
    console.log(json);
    // console.log('submit!!');
    fetch("http://localhost:4000/login-response", {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : json // 1. 서버에 사용자 정보를 전송, 로그인요청
    })
    .then(response => {
      console.log('response 가 왔어요');
      if(!response.ok) { 
        return response.text().then(err => { //얘가 비동기적으로 동작하기때문에 아래 return response.json()이 먼저 동작
          throw new Error(err)
        })
      }
      return response.json()
    })
    .then(data => {
      localStorage.setItem('token', data.accessToken)
      console.log(data.message);
      console.log('토큰은',data.accessToken);
      navigate('/hello')
    })
    .catch(err => {
      console.log('catch블럭임');
      console.log(err);
    })

    // .catch(err => console.log(err)) // 여기 catch가 실행됐다고 해서 fetch에서 오류인지 위 2개의 then에서 오류인지 알수없다!! 조심

  }

  const signupHandler = () => {
    console.log("회원가입 요청할게요");
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
        </div>
      </form>
    </div>    
  )
}
export default LoginForm