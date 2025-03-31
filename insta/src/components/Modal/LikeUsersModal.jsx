import modalDefaultStyle from "./OverLay.module.css"
import modalStyle from "./LikeUsersModal.module.css"

import { useContext, useEffect } from "react";

const LikeUsersModal = ({modalHandler}) => {

  const toggle = () => {
    modalHandler(prev => !prev)
  }
  useEffect(() => {
    // console.log(document.)
    const handleKeyDown = e => {
      // console.log(e.target, e.currentTarget);
      console.log('좋아요 리스트 모달창에서 keydown핸들러');
      e.stopPropagation()
      if(e.key === "Escape") {
        modalHandler(prev => !prev)
      }
    }
    document.addEventListener("keydown",handleKeyDown)

    return () => {
      console.log('좋아요 리스트 모달 닫힘!!');
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
  return (
      <div className={modalDefaultStyle["modal-overlay"]} onClick={toggle}>
        모달창!!
      </div>
  )
}

export default LikeUsersModal