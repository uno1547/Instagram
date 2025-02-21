import { useState, useEffect } from "react";

function Test() {
  // gpt뭐함 ㅋㅋ
  const fulfilledPromiseGen = () => {
    return new Promise((res, jej) => {
      res('resolved')
    })
  }
  const likeFetch = new Promise((res, rej) => {
    console.log('fetch완료');
    res()
  }).then(() => {
    if(true){ // 비번 오류
      console.log('회원이 아니거나 비밀번호를 확인해보세요');
      return
    }
    console.log('정상회원이래요');
    return fulfilledPromiseGen()
  }).then(data => {
    console.log('토큰을 저장합니다.');
  })

  return (
    <>
      <h1>실험실</h1>
    </>
  )
}

export default Test