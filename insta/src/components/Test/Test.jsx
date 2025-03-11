import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import LoadingPage from "../../pages/Loading/LoadingPage";
import FollowButton from "../Button/FollowButton";
import {createPortal} from "react-dom"
import style from './Test.module.css'

const List = ({ handler }) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    await new Promise((res, rej) => {
      setTimeout(() => {
        res()
      }, 2000);
    })

    setData([1, 2, 3, 4, 5])
    setIsLoading(false)
  }
  useEffect(() => {
    const handleKeyDown = e => {
      if(e.key === "Escape") handler()
    }
    document.addEventListener("keydown", handleKeyDown)
    console.log('effect!');
    setIsLoading(true)
    fetchData()
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className={style.list} >
      {/* <span>닫기</span> */}
      {isLoading ? (
        <div>스켈레톤</div>
      ) : (
      <>
      {data ? 
      (
        <>
        {/* <div>{"로딩완료"}</div> */}
        <div>{data && data.map((el,idx) => {
          return <div key={idx}>{el}</div>
        })}</div>    
        </>
      ) : (
        <div>데이터를 불러오기 실패!!</div>
      )}
      </>
      )}

    </div>
  ) 
}

const Modal = ({handler}) => {
  return (
    <div className={style["modal-overlay"]}onClick={handler}>
      <List handler = {handler}/>
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
      { isClick ? createPortal(<Modal handler = {handler}/>, document.body) : null }
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