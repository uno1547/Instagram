import { useContext } from "react"

// import Gallery from "./Gallery.jsx"
// import CommentInput from "../CreatePage/CommentInput.jsx"
import ModifyGallery from "./ModifyGallery.jsx"

import { ModifyContext } from "../../context/ModifyContext.js"
import { UserContext } from "../../context/UserContext.js"

import style from "./ModifyModal.module.css"
import ModifyCommentInput from "./ModifyCommentInput.jsx"

const ModifyModal = ({ setIsOpen }) => {
  const {images, context} = useContext(ModifyContext)
  const {curUserID} = useContext(UserContext)
  console.log(curUserID);
  // console.log(images, context);
  return (
    <div className={style["modal-background"]} onClick={e => {
      console.log('수정창 모달 배경 핸들러');
      if(e.target == e.currentTarget) setIsOpen(prev => !prev)
    }}>
      <div className={style["modify-modal"]}>
        <div className={style["modify-image"]}>
          {/* <Gallery images = {images} children={<button className={style.deleteBtn} onClick={null}>X</button>}/> */}
          <ModifyGallery images = {images}/>
        </div>
        <div className={style["modify-content"]}>
          {/* < CommentInput/> */}
          <ModifyCommentInput curUserID = {curUserID} context = {context}/>
        </div>
      </div>
    </div>
  )
}

export default ModifyModal