import { useState, useEffect } from "react";

function Test() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const idHandler = (evt) => {
    setId(evt.target.value)
  }

  const passwordHandler = (evt) => {
    setPassword(evt.target.value)
  }

  const fetchData = (evt) => {
    evt.preventDefault()
    const form = evt.target
    const formData = new FormData(form)
    const entry = Object.fromEntries(formData)
    // console.log(entry);
    const json = JSON.stringify(entry)

    console.log(json)

    // const payload = new URLSearchParams(formData)
    fetch("http://localhost:4000/login", {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : json
    }).then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.accessToken)
        console.log('받은 토큰은', data.accessToken);
      })
      .then(data => console.log(data))
      .catch(err => console.log('에러발생')) // 여기서 비번 문제인지 없는 유저인지 구분해서 알려줄수있을듯??
      // .then(data => console.log(data))
  }
  return (
    <>
      <h1>로그인하기</h1>
      <form onSubmit={fetchData}>
        <input type="text" name = "id" value={id} onChange={idHandler}/>
        <input type="password" name = "password" value={password} onChange={passwordHandler}/>
        <button type="submit">생성</button>
      </form>
    </>
  )
}

export default Test