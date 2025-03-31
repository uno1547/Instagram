import { useEffect, useState } from "react"
import { createPortal } from 'react-dom'
import { useContext } from "react"

import { ModalContext } from "../../context/ModalContext"
import { PostModalContext } from "../../context/PostModalContext"
import { UserContext } from "../../context/UserContext"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

import style from "./Posts.module.css"
import modalStyle from "../Modal/OverLay.module.css"
import Skeleton from "../Skeleton/Skeleton"
import Input from "../Input/Input"
import Button from "../Button/Button"
import LikeButton from "../Button/LikeButton"

import { Link } from "react-router-dom"

// 이 위치에서 각 post의 id? 에 해당하는 정보를 요청하고 받아야함
const Article = () => {
  //  모달창 마운트 되고, 데이터 요청해서, 댓글과 좋아요 정보를 불러오고 표시한다.
  // 랜더링 > 마운트 >
  const [isLoading, setIsLoading] = useState(true)
  const [info, setInfo] = useState({})
  
  const {isOpen, modalHandler} = useContext(ModalContext)
  
  const {userID} = useContext(UserContext)
  const {postID} = useContext(PostModalContext)
  // console.log(postID, userID, 'contetext');
  // console.log(info);
  const getInfos = async () => {
    // const sleep = await new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res("댓글과 좋아요 데이터!!")
    //   }, 1000);
    // })
    const response = await fetch(`http://localhost:8080/api/posts/${postID}`, {
      headers : {
        Authorization : `Bearer ${localStorage.getItem("access_token")}`
      }      
    })

    const responseData = await response.json()
    setInfo(responseData.data)
    setIsLoading(false)
  }

  useEffect(() => {
    const handleKeyDown = e => {
      // 이 Article의 keydown핸들러가 호출되는 시점에, 좋아요 리스트 창이 표시되어있는지
      // 여부를 알수있다면, return 하는 식으로 제어 가능할것같음 어떻게 그걸 알수있을까


      // console.log(e.target, e.currentTarget);
      console.log('게시글모달창에서 keydown핸들러');
      if(e.key === "Escape") {}
        // modalHandler()
    }
    document.addEventListener("keydown", handleKeyDown)
    // console.log('effect!');
    // console.log('article modal 마운트');
    // console.log('댓글 및 좋아요 정보를 불러올게요');
    getInfos()
    return () => {
      console.log('게시글 모달창 닫힘!!');
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // console.log(isOpen, modalHandler);
  return (
    <div className={modalStyle["modal-overlay"]}  onClick={e => {
      console.log('클릭이 감지됌!!');
      if(e.target == e.currentTarget) 
        modalHandler()
    }}>
      <div className={modalStyle["post-modal"]}>
        {isLoading ? "로딩중" : 
        <>
          <div className={modalStyle["post-image"]}>{info.imageURL}

          </div>
          <div className={modalStyle["post-content"]}>
            <div className={`${modalStyle["display-row-container"]} ${modalStyle["post-header"]}`}>
              {/* <div className="hey"> */}
                <Skeleton type={"image"} width={"40px"} height={"40px"}/>
                {/* <div className={modalStyle["profile-img"]}>프로필 사진</div> */}
                <Link to = {`/${userID}`} className={modalStyle.name}>{userID}</Link>
              {/* </div> */}
              <div>...</div>
            </div>
            <div className={modalStyle["scroll-view"]}>
              <div className={`${modalStyle["display-row-container"]} ${modalStyle["post-body"]}`}>
                <Skeleton type={"image"} width={"40px"} height={"40px"}/>
                {/* <div className={modalStyle["profile-img"]}>프로필 사진</div> */}
                <Link to = {`/${userID}`} className={modalStyle.name}>{userID}</Link>
                {/* <div className={modalStyle.name}>{userID}</div> */}
                <div>{info.context}</div>
              </div>
              <div className={modalStyle["post-comments"]}>
                {info.comments.map(comment => {
                return (
                  <div key={comment.commentID} className={`${modalStyle["display-row-container"]} ${modalStyle["post-comment"]}`}>
                    <Skeleton type={"image"} width={"40px"} height={"40px"}/>
                    {/* <div className={modalStyle["profile-img"]}>프로필사진</div> */}
                    {/* <div className={modalStyle.name}>{comment.user}</div> */}
                    <Link to = {`/${comment.user}`} className={modalStyle.name}>{comment.user}</Link>
                    <div>{comment.context}</div>
                  </div>
                )
              })}
              </div>

            </div>
            <div className= {modalStyle["post-actions"]}>
              <LikeButton info = {info}/>
              {/* <FavoriteBorderOutlinedIcon style = {{fontSize : "30px", padding : "7px", cursor : "pointer", color : "red"}}/> */}
              {/* <ModeCommentOutlinedIcon style = {{fontSize : "28px", padding : "7px", cursor : "pointer"}}/> */}
            {/* <Skeleton type={"image"} width={"40px"} height={"40px"}/> */}
            </div>
            <div className={modalStyle["post-meta"]}>
              {/* <span>{info.likes}</span> */}
              <span>{info.createdAt}</span>
            {/* <Skeleton type={"image"} width={"40px"} height={"40px"}/> */}
            </div>
            <div className={modalStyle["post-comment-form"]}>
              {/* <Input placeholder={"댓글 달기..."} style= {{flexGrow : "1", border : "none"}}/> */}
              <textarea placeholder="댓글 달기"/>
              <Button text={"게시"} style="blue"/>
            {/* <Skeleton type={"image"} width={"40px"} height={"40px"}/> */}
            </div>
          </div>
        </>

        }
      </div>
    </div>
  )
}

const Posts = ({ data }) => {
  // console.log(data);
  const [isOpen, setIsOpen] = useState(false)
  const {postID} = data // 여기서 명세대로면 userID가 없음
  // console.log(postID, userID);
  // (바둑판에 썸네일은 다 마운트 된 상태) 썸네일을 클릭시 게시글 모달창이 열리고, ^^

  const modalHandler = () => {
    // console.log('이것은 post에서 선언되었던 modal handler');
    setIsOpen(prev => !prev)
  }

  // console.log('post랜더링!');
  return (
    <PostModalContext.Provider value={{postID}}>
      <ModalContext.Provider value={{isOpen, modalHandler}}>
        <div className={style.item} onClick={modalHandler}>{}</div>
        {isOpen ? createPortal(<Article/>, document.querySelector('#modal')) : null}
      </ModalContext.Provider>
    </PostModalContext.Provider>
    )
}

export default Posts