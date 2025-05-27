import Skeleton from "../Skeleton/Skeleton"
import Button from "../Button/Button"
import { useState } from "react"

import style from "./ModifyCommentInput.module.css"
const ModifyCommentInput = ({curUserID, context}) => {
  const [text, setText] = useState(context)

  const submitHandler = e => {
    e.preventDefault()
  }
  const inputHandler = e => {
    console.log(e.target.value);
    setText(e.target.value)
  }
  return (
    <>
      <div className={style.info}>
        <Skeleton type={"image"} width={"40px"} height={"40px"}/>
        <span className={style.name}>{curUserID}</span>
      </div>
      <form action="" className={style.form}>
        <textarea name="" id="" className={style.textarea} rows="20" placeholder="내용을 입력하세요" value={text} onInput={inputHandler}></textarea>
        {/* <button>공유하기</button> */}
        <Button text={"공유하기"} style="blue" type="submit"/>
        {/* <span className={style.count}>{textLength} / 500</span> */}
      </form>
    </>
  )
}
export default ModifyCommentInput