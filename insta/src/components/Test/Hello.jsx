import { useState, useEffect } from "react";

function Hello() {
  const [word, setWord] = useState("빈문자")
  const requestAPI = async () => {
    const response = await fetch("http://localhost:4000/hello-response", {
      headers : { Authorization : `Bearer ${localStorage.getItem('token')}` }
    })
    const data = await response.json()
    setWord(data.message)
  }
  return (
    <>
      <h1>{word}</h1>
      <button onClick={requestAPI}>인사받기</button>
    </>
  )
}

export default Hello