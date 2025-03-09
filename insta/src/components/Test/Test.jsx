import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import LoadingPage from "../../pages/Loading/LoadingPage";
import FollowButton from "../Button/FollowButton";
import {createPortal} from "react-dom"
import style from './Test.module.css'

const List = ({handler}) => {
  return (
    <div className={style["modal-overlay"]}onClick={handler}>
      <div className={style.list} >
        <button onClick={handler}>닫기</button>
      </div>
    </div>
  )
}

const ModalParent = () => {
  const [isClick, setIsClick] = useState(false)

  const handler = () => {
    console.log('핸들러!');
    setIsClick(prev => !prev)
    // setIsClick(false)
  }
  return (
    <>
      <span onClick={handler}>팔로워</span>
      {/* { isClick ? createPortal(<button onClick={handler}>모달닫기</button>, document.body) : null } */}
      { isClick ? createPortal(<List handler = {handler}/>, document.body) : null }
    </>
  )
}

function Test() {
  
  return (
    <>
      <ModalParent/>
      <span>200</span>    
    </>
  )
}

export default Test