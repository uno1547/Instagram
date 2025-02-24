import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Input from '../Input/Input'
import Button from '../Button/Button'

import styles from '../LoginForm/LoginForm.module.css' //로그인폼이랑 스타일 똑같으니 그대로사용
import { isValuesValid, isContactValid, isPasswordValid, isNickNameValid } from '../../functions/validation/checkValid'

function SignupForm() {
  // console.log('render');
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [nickName, setNickName] = useState("")
  const [wrongValue, setWrongValue] = useState(null)
  
  const navigate = useNavigate()

  const contactInputHandler = (evt) => {
    const newContact = evt.target.value
    setContact(newContact)
    // console.log(newContact);
    // setisValid(isValidateForm(newContact, password))
  }

  const passwordInputHandler = (evt) => {
    const newPassword = evt.target.value
    setPassword(newPassword)
    // setisValid(isValidateForm(newPassword, newPassword))
  }

  const nameInputHandler = (evt) => {
    const newName = evt.target.value
    setName(newName)
    // setisValid(isValidateForm(newname, newname))
  }

  const nickNameInputHandler = (evt) => {
    const newNickName = evt.target.value
    setNickName(newNickName)
    // setisValid(isValidateForm(newnickName, newnickName))
  }

  const clickHandler = () => {
    // console.log({
    //   contact,
    //   password,
    //   name,
    //   nickName
    // });
    isValuesValid({
      contact,
      password,
      name,
      nickName
    })
  }

  const submitHandler = async (evt) => {
    console.log('submit핸들러');
    evt.preventDefault()
    // 1. 유효성 검사 > 안내메세지 띄울지결정
    const message = await isValuesValid({ contact, password, name, nickName })
    console.log(message);
    // 경고창 랜더링
    if(message != true) {
      setWrongValue(message) // promise인데도 값으로 알아서 들어간듯??
      return
    }
    console.log('모두 true');
    setWrongValue(null)
    // 모두 유효하다면 json으로 바꿔서 fetch post 요청 전송
    
    const form = evt.target
    const formData = new FormData(form)
    const entry = Object.fromEntries(formData)
    const json = JSON.stringify(entry)
    console.log(json);

    const response = await fetch("http://localhost:4000/signup", {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : json
    })

    const result = await response.json()
    if(result) {
      navigate('/')
    }
  }
  /*
  1. 4개의input값 입력
  2. 회원가입 클릭 > 4개의 state값을 확인 > @@값을 확인하세요 표시
  
  */
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Instagram</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={`${styles.field} ${styles.inputField}`}>
          <Input name = "contact"  placeholder={"전화번호 또는 이메일 주소"} handler={contactInputHandler} value={contact}/>
          <Input name = "password"  type="password" placeholder={"비밀번호"} handler={passwordInputHandler} value={password}/>
          <Input name = "name" type="text" placeholder={"성명"} handler={nameInputHandler} value={name}/>
          <Input name = "nickName" type="text" placeholder={"사용자 이름"} handler={nickNameInputHandler} value={nickName}/>
        </div>
        <div className={`${styles.field} ${styles.buttonField}`}>
          <Button text="회원가입" type="submit"/>
          <div className={styles.notice}>{wrongValue}</div>
          {/* <Button text="회원가입" type="button" handler={clickHandler}/> */}
        </div>
      </form>
    </div>      
  )
}

export default SignupForm