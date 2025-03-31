import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../Button/Button";

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { createPortal } from "react-dom";

const FirstModal = ({ modalHandler }) => {
  const [secondOpen, setSecondOpen] = useState(false)

  const secondModalHandler = () => {
    setSecondOpen(!secondOpen)
  }

  const firstHandleKeyDown = e => {
    console.log('게시글에서 keydown핸들러');
    if(e.key === "Escape") {
      modalHandler()
    }
  }

  // useEffect(() => {
  //   console.log('firstModal mount effect');

  //   document.addEventListener("keydown", firstHandleKeyDown)
  //   return () => {
  //     console.log('firstModal unmount effect');
  //     document.removeEventListener("keydown", firstHandleKeyDown)
  //   }
  // }, [])

  useEffect(() => {
    console.log('secondOpen change effect!!');
    if(secondOpen) {
      console.log('좋아요 리스트가 열려있다! 핸들러 삭제!');
      document.removeEventListener("keydown", firstHandleKeyDown)
    } else {
      console.log('좋아요 리스트가 닫혀있다! 핸들러 추가!');
      document.addEventListener("keydown", firstHandleKeyDown)
    }
  }, [secondOpen])

  return (
    <>
      <Button text={"좋아요 리스트 열기"} handler={secondModalHandler}/>
      {secondOpen ? createPortal(<SecondModal modalHandler = {secondModalHandler}/>, document.querySelector('.inner')) : null}
    </>
  )
}

const SecondModal = ({modalHandler}) => {
  /*
  */
  useEffect(() => {
    const secondHandleKeyDown = e => {
      console.log('좋아요 리스트 에서 keydown핸들러');
      if(e.key === "Escape") {
        modalHandler()
      }
    }
    document.addEventListener("keydown", secondHandleKeyDown)
    return () => {
      document.removeEventListener("keydown", secondHandleKeyDown)
    }
  }, [])
  return (
    <>
      <div>이건 두번째 모달이에요</div>
    </>
  )
}

const Test = () => {
  const [firstOpen, setFirstOpen] = useState(false)
  const firstModalHandler = () => {
    setFirstOpen(!firstOpen)
  }
  return (
    <>
      <Button text={"게시글 열기"} handler={firstModalHandler}/>
      {/* <button onClick={firstModalHandler}></button> */}
      {firstOpen ? createPortal(<FirstModal modalHandler={firstModalHandler}/>, document.querySelector('.inner')) : null}
    </>
  )
}

export default Test