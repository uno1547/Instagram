import Skeleton from "../Skeleton/Skeleton"
import Button from "../Button/Button"

import style from "./CommentInput.module.css"
// import modalStyle from "../../components/Modal/OverLay.module.css"

import { UserContext } from "../../context/UserContext"
import { useContext, useState } from "react"

const CommentInput = ({ files }) => {
  const [text, setText] = useState("")
  const [textLength, setTextLength] = useState(0)
  const {curUserID} = useContext(UserContext)
  // console.log(curUserID);
  const inputHandler = e => {
    const value = e.target.value
    if(value.length > 500) {
      return
    }
    setText(value)
    setTextLength(value.length)
  }

  // const 

  const submitHandler = async e => {
    // console.log('제출');
    e.preventDefault()
    /*
    await new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, 1000);
    })
    */
    console.log('전송완료!');
    console.log(text);
    console.log(files);
  }

  return (
    // <UserContext.Provider value={{curUserID}}>
      <div className={style.commentInput}>
        <div className={style.info}>
          <Skeleton type={"image"} width={"40px"} height={"40px"}/>
          <span className={style.name}>{curUserID}</span>
        </div>
        <form action="" className={style.form} onSubmit={submitHandler}>
          <textarea name="" id="" className={style.textarea} rows="20" placeholder="내용을 입력하세요" value={text} onInput={inputHandler}></textarea>
          {/* <button>공유하기</button> */}
          <Button text={"공유하기"} style="blue" type="submit"/>
          <span className={style.count}>{textLength} / 500</span>
        </form>
      </div>
    // </UserContext.Provider>
  )
}
export default CommentInput